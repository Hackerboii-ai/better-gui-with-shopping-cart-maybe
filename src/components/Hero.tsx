import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-luxury.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-200/20 rounded-full translate-y-40 -translate-x-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Flash Sale Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-500 text-white rounded-full px-6 py-2 mb-6 animate-pulse">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold">The Grand opening sale is live</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Shop Smart,
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Save Big
            </span>
            Every Day
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover amazing deals on thousands of products. Fast shipping, great prices, and exceptional customer service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/products" className="inline-flex items-center">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              View Deals
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">100k+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                4.1
                <Star className="w-5 h-5 text-yellow-400 fill-current ml-1" />
              </div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-orange-200/30 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-red-200/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-yellow-200/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;