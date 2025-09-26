import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    onAddToCart?.(product.id);
    setTimeout(() => setIsLoading(false), 600);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product.id);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group relative overflow-hidden border-0 shadow-subtle hover:shadow-luxury transition-all duration-300 bg-card">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <Badge className="bg-premium text-premium-foreground text-xs">
              New
            </Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-luxury text-luxury-foreground text-xs">
              Bestseller
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border-0 transition-colors duration-200 ${
            isWishlisted ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
          }`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add Button - Shows on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-luxury hover:bg-luxury/90 text-luxury-foreground rounded-full"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            {isLoading ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-premium fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;