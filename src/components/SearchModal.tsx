import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, X, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/lib/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults(products.slice(0, 6)); // Show first 6 products when no search
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchTerm]);

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const handleProductClick = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products, categories, or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((product) => (
                  <Card key={product.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground truncate">
                                {product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                              
                              {/* Rating */}
                              <div className="flex items-center space-x-1 mt-1">
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
                                <span className="text-xs text-muted-foreground">
                                  ({product.reviews})
                                </span>
                              </div>

                              {/* Badges */}
                              <div className="flex space-x-1 mt-2">
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
                              </div>
                            </div>

                            {/* Price and Actions */}
                            <div className="flex flex-col items-end space-y-2 ml-4">
                              <div className="text-right">
                                <span className="text-lg font-bold text-foreground">
                                  ${product.price.toFixed(2)}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through ml-2">
                                    ${product.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleAddToCart(product.id)}
                                  className="bg-luxury hover:bg-luxury/90 text-luxury-foreground"
                                >
                                  <ShoppingBag className="w-3 h-3 mr-1" />
                                  Add
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  asChild
                                  onClick={handleProductClick}
                                >
                                  <Link to={`/products?search=${encodeURIComponent(product.name)}`}>
                                    View
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground">
                  Try searching with different keywords or browse our collections.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/products" onClick={handleProductClick}>
                    Browse All Products
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Quick search:</span>
              {["Watches", "Bags", "Jewelry", "Accessories"].map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
