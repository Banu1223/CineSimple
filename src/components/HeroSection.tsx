import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

interface FeaturedMovie {
  title: string;
  description: string;
  rating: number;
  duration: number;
  genre: string[];
  trailer?: string;
}

interface HeroSectionProps {
  featuredMovie?: FeaturedMovie;
  onBookNow?: () => void;
  onWatchTrailer?: () => void;
}

export default function HeroSection({ 
  featuredMovie = {
    title: "Avatar: The Way of Water",
    description: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, and the lengths they go to keep each other safe.",
    rating: 8.1,
    duration: 192,
    genre: ["Action", "Adventure", "Sci-Fi"]
  },
  onBookNow,
  onWatchTrailer 
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Featured Badge */}
        <Badge className="mb-6 bg-accent text-accent-foreground text-sm px-4 py-2">
          ✨ Now Showing
        </Badge>

        {/* Movie Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {featuredMovie.title}
          </span>
        </h1>

        {/* Movie Meta */}
        <div className="flex items-center justify-center gap-6 mb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent fill-current" />
            <span className="font-medium">{featuredMovie.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{featuredMovie.duration} min</span>
          </div>
          <div className="hidden md:flex gap-2">
            {featuredMovie.genre.map((genre) => (
              <Badge key={genre} variant="outline">
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {featuredMovie.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onBookNow}
            className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3"
          >
            Book Tickets Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onWatchTrailer}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-3"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}