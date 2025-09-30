import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Tag, Zap, Star, Filter, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Deals = () => {
  const [sortBy, setSortBy] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");

  const deals = [
    {
      id: "1",
      title: "Electronics Flash Sale",
      subtitle: "Up to 70% off",
      description: "Smartphones, laptops, and gadgets",
      image: "/src/assets/product-watch.jpg",
      discount: "70%",
      timeLeft: "2h 15m",
      originalPrice: 999,
      salePrice: 299,
      rating: 4.8,
      reviews: 1250,
      category: "Electronics"
    },
    {
      id: "2", 
      title: "Fashion Week Special",
      subtitle: "Up to 50% off",
      description: "Clothing, shoes, and accessories",
      image: "/src/assets/product-bag.jpg",
      discount: "50%",
      timeLeft: "1d 8h",
      originalPrice: 199,
      salePrice: 99,
      rating: 4.6,
      reviews: 890,
      category: "Fashion"
    },
    {
      id: "3",
      title: "Home & Garden",
      subtitle: "Up to 40% off",
      description: "Furniture, decor, and outdoor items",
      image: "/src/assets/product-sunglasses.jpg",
      discount: "40%",
      timeLeft: "3d 12h",
      originalPrice: 299,
      salePrice: 179,
      rating: 4.7,
      reviews: 567,
      category: "Home"
    },
    {
      id: "4",
      title: "Sports & Fitness",
      subtitle: "Up to 60% off",
      description: "Equipment, apparel, and accessories",
      image: "/src/assets/product-watch.jpg",
      discount: "60%",
      timeLeft: "5d 6h",
      originalPrice: 149,
      salePrice: 59,
      rating: 4.9,
      reviews: 234,
      category: "Sports"
    },
    {
      id: "5",
      title: "Beauty & Personal Care",
      subtitle: "Up to 35% off",
      description: "Skincare, makeup, and wellness",
      image: "/src/assets/product-bag.jpg",
      discount: "35%",
      timeLeft: "2d 4h",
      originalPrice: 79,
      salePrice: 51,
      rating: 4.5,
      reviews: 445,
      category: "Beauty"
    },
    {
      id: "6",
      title: "Books & Media",
      subtitle: "Up to 45% off",
      description: "Books, movies, and digital content",
      image: "/src/assets/product-sunglasses.jpg",
      discount: "45%",
      timeLeft: "1w 2d",
      originalPrice: 29,
      salePrice: 16,
      rating: 4.4,
      reviews: 123,
      category: "Books"
    }
  ];

  const categories = ["All", "Electronics", "Fashion", "Home", "Sports", "Beauty", "Books"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Today's Deals</h1>
          <p className="text-gray-600">Don't miss out on these amazing offers</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search deals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="discount">Highest Discount</SelectItem>
                  <SelectItem value="time">Ending Soon</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filters</span>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl">
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
                  <Badge className="bg-red-500 text-white text-lg font-bold px-3 py-1 rounded-full">
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

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ${deal.salePrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {deal.rating} ({deal.reviews} reviews)
                    </span>
                  </div>

                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg"
          >
            Load More Deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
