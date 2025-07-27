import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Clock, Calendar } from "lucide-react";

interface Movie {
  id: string;
  title: string;
  poster: string;
  genre: string[];
  rating: number;
  duration: number;
  releaseDate: string;
  description: string;
  language: string;
  format: string[];
}

interface MovieCardProps {
  movie: Movie;
  onBookNow?: (movieId: string) => void;
}

export default function MovieCard({ movie, onBookNow }: MovieCardProps) {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="group relative overflow-hidden border-none bg-gradient-card hover:shadow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
          <Star className="w-3 h-3 mr-1 fill-current" />
          {movie.rating}
        </Badge>

        {/* Format Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {movie.format.map((format) => (
            <Badge key={format} variant="secondary" className="text-xs">
              {format}
            </Badge>
          ))}
        </div>

        {/* Hover Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onBookNow?.(movie.id);
            }}
            className="w-full bg-gradient-primary hover:shadow-glow"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {movie.duration}m
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {movie.releaseDate}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="outline" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {movie.description}
        </p>
      </div>
    </Card>
  );
}