import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { theaters } from "@/data/mockData";
import { MapPin, Star, Monitor, Search } from "lucide-react";

const Theaters = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTheaters = theaters.filter(theater =>
    theater.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    theater.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header currentUser={null} onLogin={() => {}} onLogout={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Theaters Near You</h1>
          <p className="text-muted-foreground mb-6">Find the perfect cinema for your movie experience</p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search theaters or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTheaters.map((theater) => (
            <Card key={theater.id} className="overflow-hidden bg-gradient-card hover:shadow-primary transition-all duration-300">
              <div className="aspect-video relative">
                <img 
                  src={theater.image} 
                  alt={theater.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  {theater.rating}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{theater.name}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{theater.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Monitor className="w-4 h-4 mr-2" />
                  <span className="text-sm">{theater.screens} Screens • {theater.distance}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {theater.amenities.slice(0, 3).map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-primary"
                  onClick={() => navigate(`/theater/${theater.id}`)}
                >
                  View Showtimes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theaters;