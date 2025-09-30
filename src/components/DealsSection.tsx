import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, Zap, Gift, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const DealsSection = () => {
  const deals = [
    {
      id: "1",
      title: "Flash Sale",
      subtitle: "Up to 70% off",
      description: "Limited time offer on selected items",
      image: "/src/assets/product-watch.jpg",
      discount: "70%",
      timeLeft: "2h 15m",
      color: "bg-red-500",
      textColor: "text-white"
    },
    {
      id: "2", 
      title: "New Arrivals",
      subtitle: "Fresh Collection",
      description: "Latest trends just arrived",
      image: "/src/assets/product-bag.jpg",
      discount: "30%",
      timeLeft: "5d 12h",
      color: "bg-blue-500",
      textColor: "text-white"
    },
    {
      id: "3",
      title: "Best Sellers",
      subtitle: "Customer Favorites",
      description: "Top rated products",
      image: "/src/assets/product-sunglasses.jpg",
      discount: "25%",
      timeLeft: "1w 3d",
      color: "bg-green-500",
      textColor: "text-white"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "📱", deals: "50+ deals" },
    { name: "Fashion", icon: "👕", deals: "30+ deals" },
    { name: "Home", icon: "🏠", deals: "25+ deals" },
    { name: "Sports", icon: "⚽", deals: "20+ deals" },
    { name: "Beauty", icon: "💄", deals: "15+ deals" },
    { name: "Books", icon: "📚", deals: "10+ deals" },
    { name: "Automotive", icon: "🚗", deals: "12+ deals" },
    { name: "Toys", icon: "🧸", deals: "18+ deals" },
    { name: "Health", icon: "💊", deals: "8+ deals" },
    { name: "Pet", icon: "🐕", deals: "14+ deals" },
    { name: "Office", icon: "💼", deals: "16+ deals" },
    { name: "Garden", icon: "🌱", deals: "22+ deals" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Today's Deals
            </h2>
            <p className="text-gray-600">Don't miss out on these amazing offers</p>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            <Link to="/deals" className="inline-flex items-center">
              View All Deals
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deals.map((deal, index) => (
            <Card key={deal.id} className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl animate-fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative">
                {/* Deal Image */}
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${deal.color} ${deal.textColor} text-lg font-bold px-3 py-1 rounded-full`}>
                    -{deal.discount}
                  </Badge>
                </div>

                {/* Timer */}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{deal.timeLeft}</span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-600 font-semibold text-sm">FLASH DEAL</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {deal.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {deal.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.8 (1.2k reviews)</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-md"
                    >
                      Shop Now
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="group p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{category.deals}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Special Offers Banner */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Prime Member Benefits</h3>
              <p className="text-orange-100 mb-4">
                Get free shipping, exclusive deals, and early access to sales
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
              >
                Try Prime Free
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <Gift className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="text-center">
                <Tag className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm">Exclusive Deals</span>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
