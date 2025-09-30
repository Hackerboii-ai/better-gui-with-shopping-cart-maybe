import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import watchImage from "@/assets/product-watch.jpg";
import bagImage from "@/assets/product-bag.jpg";
import sunglassesImage from "@/assets/product-sunglasses.jpg";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: "1",
      name: "Classic Timepiece Collection",
      price: 2499.99,
      originalPrice: 2999.99,
      image: watchImage,
      rating: 4.9,
      reviews: 128,
      isNew: true,
      isBestseller: false,
    },
    {
      id: "2",
      name: "Premium Leather Handbag",
      price: 1299.99,
      image: bagImage,
      rating: 4.8,
      reviews: 96,
      isNew: false,
      isBestseller: true,
    },
    {
      id: "3",
      name: "Designer Sunglasses Elite",
      price: 599.99,
      originalPrice: 799.99,
      image: sunglassesImage,
      rating: 4.7,
      reviews: 204,
      isNew: false,
      isBestseller: false,
    },
  ];

  const handleAddToCart = (productId: string) => {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const handleToggleWishlist = (productId: string) => {
    console.log(`Toggled wishlist for product ${productId}`);
    // Wishlist functionality will be implemented later
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent ml-3">
              Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked products that our customers love. Quality guaranteed with fast shipping and great prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/products" className="inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;