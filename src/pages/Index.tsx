import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { movies, categories, theaters, mockUser } from "@/data/mockData";
import { MapPin, Star, Monitor } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [selectedCategory, setSelectedCategory] = useState("now-showing");

  const handleLogin = () => {
    console.log("Login clicked");
    // In a real app, this would open a login modal or redirect to login page
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleBookNow = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  const filteredMovies = selectedCategory === "now-showing" 
    ? movies 
    : movies.filter(movie => 
        movie.genre.some(g => g.toLowerCase() === selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <HeroSection onBookNow={() => handleBookNow("1")} />

      {/* Categories */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse Movies</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-gradient-primary hover:shadow-primary" 
                : ""
              }
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </section>

      {/* Theaters Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Theaters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theaters.map((theater) => (
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
                    onClick={() => navigate('/theaters')}
                  >
                    View Showtimes
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 CineBook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
