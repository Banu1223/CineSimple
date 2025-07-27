// Mock data for the movie booking system

export const movies = [
  {
    id: "1",
    title: "Avatar: The Way of Water",
    poster: "https://images.unsplash.com/photo-1594736797933-d0eaa7459d90?w=400&h=600&fit=crop",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.1,
    duration: 192,
    releaseDate: "2022-12-16",
    description: "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family.",
    language: "English",
    format: ["2D", "3D", "IMAX"]
  },
  {
    id: "2", 
    title: "Top Gun: Maverick",
    poster: "https://images.unsplash.com/photo-1489599807473-d2f4e3b0d7eb?w=400&h=600&fit=crop",
    genre: ["Action", "Drama"],
    rating: 8.6,
    duration: 130,
    releaseDate: "2022-05-27",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    language: "English", 
    format: ["2D", "IMAX"]
  },
  {
    id: "3",
    title: "Black Panther: Wakanda Forever",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    genre: ["Action", "Adventure", "Drama"],
    rating: 7.3,
    duration: 161,
    releaseDate: "2022-11-11", 
    description: "The people of Wakanda fight to protect their home from intervening world powers.",
    language: "English",
    format: ["2D", "3D", "IMAX"]
  },
  {
    id: "4",
    title: "The Batman",
    poster: "https://images.unsplash.com/photo-1608889476518-738c9b1b3d40?w=400&h=600&fit=crop",
    genre: ["Action", "Crime", "Drama"],
    rating: 7.8,
    duration: 176,
    releaseDate: "2022-03-04",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    language: "English",
    format: ["2D", "IMAX"]
  },
  {
    id: "5",
    title: "Spider-Man: No Way Home",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    duration: 148,
    releaseDate: "2021-12-17",
    description: "Spider-Man seeks the help of Doctor Strange to restore his secret identity.",
    language: "English",
    format: ["2D", "3D", "IMAX"]
  },
  {
    id: "6",
    title: "Dune",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    duration: 155,
    releaseDate: "2021-10-22",
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
    language: "English",
    format: ["2D", "IMAX"]
  }
];

export const theaters = [
  {
    id: "1",
    name: "Cineplex Downtown",
    location: "123 Main Street, Downtown",
    distance: "2.5 km",
    amenities: ["IMAX", "Dolby Atmos", "Recliner Seats", "Food Court"],
    image: "https://images.unsplash.com/photo-1489599807473-d2f4e3b0d7eb?w=800&h=400&fit=crop",
    screens: 12,
    rating: 4.5
  },
  {
    id: "2", 
    name: "Galaxy Multiplex",
    location: "456 Oak Avenue, Mall Plaza",
    distance: "4.2 km",
    amenities: ["4DX", "VIP Lounge", "Premium Seats", "Parking"],
    image: "https://images.unsplash.com/photo-1594736797933-d0eaa7459d90?w=800&h=400&fit=crop",
    screens: 8,
    rating: 4.3
  },
  {
    id: "3",
    name: "Royal Cinema",
    location: "789 Park Road, Central City",
    distance: "3.1 km", 
    amenities: ["IMAX", "Premium Seats", "Concessions", "Valet Parking"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    screens: 6,
    rating: 4.7
  }
];

export const categories = [
  { id: "now-showing", name: "Now Showing", icon: "🎬" },
  { id: "coming-soon", name: "Coming Soon", icon: "🔜" },
  { id: "action", name: "Action", icon: "💥" },
  { id: "comedy", name: "Comedy", icon: "😂" },
  { id: "drama", name: "Drama", icon: "🎭" },
  { id: "horror", name: "Horror", icon: "👻" },
  { id: "sci-fi", name: "Sci-Fi", icon: "🚀" },
  { id: "romance", name: "Romance", icon: "💝" }
];

export const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  isAdmin: false
};

export const mockAdmin = {
  name: "Admin User",
  email: "admin@cinebook.com", 
  isAdmin: true
};

export const bookings = [
  {
    id: "1",
    movieTitle: "Avatar: The Way of Water",
    theater: "Cineplex Downtown",
    date: "2024-01-15",
    time: "7:30 PM",
    seats: ["A1", "A2"],
    total: 28.50,
    status: "confirmed"
  },
  {
    id: "2",
    movieTitle: "Top Gun: Maverick", 
    theater: "Galaxy Multiplex",
    date: "2024-01-20",
    time: "9:15 PM",
    seats: ["B5", "B6", "B7"],
    total: 42.75,
    status: "confirmed"
  }
];