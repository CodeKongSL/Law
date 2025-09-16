import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Briefcase, MessageCircle, Calendar } from "lucide-react";

interface LawyerCardProps {
  lawyer: {
    id: string;
    name: string;
    image?: string;
    specialties: string[];
    location: string;
    experience: number;
    rating: number;
    reviewCount: number;
    hourlyRate?: number;
    bio: string;
    education: string;
  };
}

const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  const initials = lawyer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 group">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={lawyer.image} alt={lawyer.name} />
          <AvatarFallback className="bg-primary text-primary-foreground font-medium text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-playfair font-semibold text-foreground group-hover:text-primary transition-smooth">
            {lawyer.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{lawyer.education}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(lawyer.rating)
                      ? "text-accent fill-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{lawyer.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({lawyer.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {lawyer.specialties.slice(0, 3).map((specialty) => (
            <Badge
              key={specialty}
              variant="secondary"
              className="text-xs bg-primary-light text-primary border-primary/20"
            >
              {specialty}
            </Badge>
          ))}
          {lawyer.specialties.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{lawyer.specialties.length - 3} more
            </Badge>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{lawyer.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="w-4 h-4" />
          <span>{lawyer.experience} years experience</span>
        </div>
        {lawyer.hourlyRate && (
          <div className="text-sm text-muted-foreground">
            Starting at <span className="font-semibold text-foreground">${lawyer.hourlyRate}/hour</span>
          </div>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
        {lawyer.bio}
      </p>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="default" size="sm" className="flex-1">
          <Calendar className="w-4 h-4 mr-2" />
          Book Consultation
        </Button>
        <Button variant="outline" size="sm">
          <MessageCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default LawyerCard;