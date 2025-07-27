import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { movies, theaters } from "@/data/mockData";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react";

const Booking = () => {
  const { movieId, theaterId, showtime } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  const movie = movies.find(m => m.id === movieId);
  const theater = theaters.find(t => t.id === theaterId);
  
  if (!movie || !theater) {
    return <div>Booking details not found</div>;
  }

  // Generate seat layout
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const occupiedSeats = ['A3', 'A4', 'B6', 'C8', 'D2', 'E7', 'F5'];
  
  const ticketPrice = 250;
  const total = selectedSeats.length * ticketPrice;

  const toggleSeat = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatClass = (seatId: string) => {
    if (occupiedSeats.includes(seatId)) return "bg-red-500 cursor-not-allowed";
    if (selectedSeats.includes(seatId)) return "bg-accent cursor-pointer";
    return "bg-card hover:bg-accent/50 cursor-pointer";
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) return;
    
    // In a real app, this would create the booking
    alert(`Booking confirmed!\nSeats: ${selectedSeats.join(', ')}\nTotal: ₹${total}`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentUser={null} onLogin={() => {}} onLogout={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Selection */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Select Seats</h2>
              
              {/* Screen */}
              <div className="text-center mb-8">
                <div className="bg-gradient-primary h-2 rounded-full w-3/4 mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">SCREEN</p>
              </div>

              {/* Seat Map */}
              <div className="space-y-2 mb-6">
                {rows.map(row => (
                  <div key={row} className="flex items-center justify-center gap-2">
                    <span className="w-6 text-center font-medium">{row}</span>
                    {Array.from({ length: seatsPerRow }, (_, i) => {
                      const seatId = `${row}${i + 1}`;
                      return (
                        <button
                          key={seatId}
                          onClick={() => toggleSeat(seatId)}
                          className={`w-8 h-8 rounded text-xs font-medium transition-colors ${getSeatClass(seatId)}`}
                          disabled={occupiedSeats.includes(seatId)}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-card rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-accent rounded"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Occupied</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">{movie.title}</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {movie.genre.slice(0, 2).map(genre => (
                      <Badge key={genre} variant="outline" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {theater.name}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Today
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {showtime}
                </div>

                {selectedSeats.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Seats: {selectedSeats.join(', ')}
                  </div>
                )}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tickets ({selectedSeats.length})</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Convenience Fee</span>
                    <span>₹{selectedSeats.length * 25}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{total + (selectedSeats.length * 25)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow"
                  onClick={handleConfirmBooking}
                  disabled={selectedSeats.length === 0}
                >
                  Confirm Booking
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;