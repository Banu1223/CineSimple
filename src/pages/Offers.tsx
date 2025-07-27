import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Clock, Users, CreditCard } from "lucide-react";

const offers = [
  {
    id: "1",
    title: "Student Discount",
    description: "Get 25% off on all movie tickets with valid student ID",
    discount: "25% OFF",
    validUntil: "2024-12-31",
    type: "Student",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "2", 
    title: "Weekday Special",
    description: "Book tickets for Monday to Thursday shows and save big",
    discount: "₹99 Only",
    validUntil: "2024-12-31",
    type: "Weekday",
    icon: <Clock className="w-6 h-6" />
  },
  {
    id: "3",
    title: "Family Pack",
    description: "Book 4 tickets and get 1 free popcorn combo",
    discount: "Free Combo",
    validUntil: "2024-11-30",
    type: "Family",
    icon: <Gift className="w-6 h-6" />
  },
  {
    id: "4",
    title: "Credit Card Offer",
    description: "Use HDFC credit card and get 20% cashback up to ₹150",
    discount: "20% Cashback",
    validUntil: "2024-10-31",
    type: "Banking",
    icon: <CreditCard className="w-6 h-6" />
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header currentUser={null} onLogin={() => {}} onLogout={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
          <p className="text-muted-foreground">Save more on your movie experience with our exclusive deals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="p-6 bg-gradient-card hover:shadow-primary transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    {offer.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {offer.type}
                    </Badge>
                  </div>
                </div>
                <Badge className="bg-gradient-primary text-white font-bold">
                  {offer.discount}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {offer.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Valid until: {offer.validUntil}
                </span>
                <Button className="bg-gradient-primary hover:shadow-glow">
                  Use Offer
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
          <div className="text-muted-foreground space-y-2 text-left max-w-2xl mx-auto">
            <p>• Offers are valid for a limited time only</p>
            <p>• Student discounts require valid student ID verification</p>
            <p>• Credit card offers are subject to bank terms and conditions</p>
            <p>• Offers cannot be combined with other promotions</p>
            <p>• CineBook reserves the right to modify or cancel offers without prior notice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;