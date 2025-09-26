import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import watchImage from "@/assets/product-watch.jpg";
import bagImage from "@/assets/product-bag.jpg";
import sunglassesImage from "@/assets/product-sunglasses.jpg";

const FeaturedProducts = () => {
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
    console.log(`Added product ${productId} to cart`);
    // Cart functionality will be implemented later
  };

  const handleToggleWishlist = (productId: string) => {
    console.log(`Toggled wishlist for product ${productId}`);
    // Wishlist functionality will be implemented later
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured
            <span className="bg-gradient-to-r from-premium to-accent bg-clip-text text-transparent ml-3">
              Collection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium products, crafted with attention to detail and designed for those who appreciate the finer things in life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-luxury hover:bg-luxury/90 text-luxury-foreground px-8 py-4 rounded-full font-semibold"
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