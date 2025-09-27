import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury products showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury/80 via-luxury/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-premium/10 backdrop-blur-sm border border-premium/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-premium fill-current" />
            <span className="text-sm font-medium text-premium">Premium Collection 2024</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-premium to-accent bg-clip-text text-transparent">
              Luxury
            </span>
            Redefined
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience the pinnacle of craftsmanship and design. Our exclusive collection brings together timeless elegance and modern sophistication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              asChild 
              size="lg"
              className="bg-premium hover:bg-premium/90 text-premium-foreground border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/products" className="inline-flex items-center">
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              Explore Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-sm flex items-center justify-center">
                <Star className="w-4 h-4 text-premium fill-current mr-1" />
                Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm">Authentic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;