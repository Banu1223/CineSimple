import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Star, Clock, Calendar, MapPin } from "lucide-react";
import { movies, theaters } from "@/data/mockData";
import Header from "@/components/Header";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(m => m.id === id);
  
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const showtimes = ["2:30 PM", "5:45 PM", "8:00 PM", "10:30 PM"];

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
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-current" />
                <span className="font-medium">{movie.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{movie.releaseDate}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre.map((genre) => (
                <Badge key={genre} variant="outline">
                  {genre}
                </Badge>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {movie.description}
            </p>

            {/* Showtimes */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Showtimes</h2>
              {theaters.map((theater) => (
                <Card key={theater.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{theater.name}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{theater.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {theater.rating}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {showtimes.map((time) => (
                      <Button 
                        key={time}
                        variant="outline"
                        onClick={() => navigate(`/booking/${movie.id}/${theater.id}/${time}`)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;