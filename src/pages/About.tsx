import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Star, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Crown,
  Target,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  const values = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for perfection in every product and service we offer."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Our love for luxury and craftsmanship drives everything we do."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously evolving to bring you the latest in luxury design."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Azure Store Founded",
      description: "Started with a vision to redefine luxury e-commerce"
    },
    {
      year: "2021",
      title: "First 10K Customers",
      description: "Reached our first major milestone in customer satisfaction"
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Extended our reach to 25+ countries worldwide"
    },
    {
      year: "2023",
      title: "Premium Collection Launch",
      description: "Introduced our exclusive premium product line"
    },
    {
      year: "2024",
      title: "50K+ Happy Customers",
      description: "Celebrating our growing community of luxury enthusiasts"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in luxury retail",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Design",
      description: "Award-winning designer with expertise in luxury aesthetics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Customer Experience Director",
      description: "Passionate about creating exceptional customer journeys",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Technology Lead",
      description: "Innovation expert ensuring seamless digital experiences",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: <Users className="w-5 h-5" /> },
    { number: "4.9", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
    { number: "25+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
    { number: "100%", label: "Authentic Products", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-premium text-premium-foreground mb-4">
              <Crown className="w-3 h-3 mr-1" />
              About Azure Store
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Redefining Luxury
              <span className="block bg-gradient-to-r from-premium to-accent bg-clip-text text-transparent">
                E-commerce
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Azure Store, we believe that luxury is not just about the products you own, 
              but the experience of discovering and acquiring them. Founded in 2020, we've 
              dedicated ourselves to curating the world's finest products and delivering 
              exceptional service to discerning customers worldwide.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Azure Store was born from a simple yet powerful vision: to make luxury 
                  accessible without compromising on quality or authenticity. Our founder, 
                  Sarah Chen, recognized that the luxury market needed a digital transformation 
                  that maintained the personal touch and exclusivity that discerning customers expect.
                </p>
                <p>
                  What started as a small boutique operation has grown into a global platform 
                  serving customers in over 25 countries. We've built relationships with 
                  the world's most prestigious brands and artisans, ensuring that every 
                  product in our collection meets our exacting standards.
                </p>
                <p>
                  Today, Azure Store stands as a testament to what's possible when passion, 
                  expertise, and innovation come together. We're not just selling products; 
                  we're curating experiences that celebrate the finer things in life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Azure Store team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the experience we create for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Azure Store into the luxury destination it is today.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-premium to-accent"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-premium border-premium">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-premium rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Azure Store's success, dedicated to bringing you the finest luxury experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-premium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-premium/10 to-accent/10 border-0">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience the Azure Store difference. Discover luxury redefined through our 
                carefully curated collections and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-luxury hover:bg-luxury/90 text-luxury-foreground">
                  <Link to="/products">
                    Explore Collections
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
