import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Crown, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const Collections = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const collections = [
    {
      id: "luxury-watches",
      name: "Luxury Timepieces",
      description: "Exquisite watches that define elegance and precision",
      image: "/src/assets/product-watch.jpg",
      productCount: 3,
      featured: true,
      category: "Watches"
    },
    {
      id: "premium-bags",
      name: "Premium Handbags",
      description: "Handcrafted bags from the finest materials",
      image: "/src/assets/product-bag.jpg",
      productCount: 3,
      featured: true,
      category: "Bags"
    },
    {
      id: "designer-jewelry",
      name: "Designer Jewelry",
      description: "Stunning pieces that capture timeless beauty",
      image: "/src/assets/product-sunglasses.jpg",
      productCount: 4,
      featured: false,
      category: "Jewelry"
    },
    {
      id: "luxury-accessories",
      name: "Luxury Accessories",
      description: "Essential accessories for the discerning individual",
      image: "/src/assets/product-bag.jpg",
      productCount: 2,
      featured: false,
      category: "Accessories"
    }
  ];

  const featuredProducts = products.filter(product => product.isBestseller || product.isNew).slice(0, 6);

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

  const handleToggleWishlist = (productId: string) => {
    console.log(`Toggled wishlist for product ${productId}`);
    // Wishlist functionality will be implemented later
  };

  const getCollectionProducts = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Azure Store Collections</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections, each carefully selected to represent the pinnacle of luxury and craftsmanship.
          </p>
        </div>

        {/* Featured Collections */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Collections</h2>
            <Badge className="bg-premium text-premium-foreground">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.filter(collection => collection.featured).map((collection) => (
              <Card key={collection.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                    <p className="text-sm text-white/90 mb-2">{collection.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">{collection.productCount} items</span>
                      <Button asChild size="sm" className="bg-premium hover:bg-premium/90">
                        <Link to={`/products?category=${collection.category}`}>
                          Explore
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Collections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Collections</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <Card key={collection.id} className="group overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    {collection.featured && (
                      <Badge className="bg-luxury text-luxury-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{collection.productCount} items</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/products?category=${collection.category}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products from Collections */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
            <Button asChild variant="outline">
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
        </section>

        {/* Collection Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Watches", "Bags", "Jewelry", "Accessories"].map((category) => {
              const categoryProducts = getCollectionProducts(category);
              return (
                <Card key={category} className="group cursor-pointer hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{category}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{categoryProducts.length} items</p>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/products?category=${category}`}>
                        Explore
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-premium/10 to-accent/10 border-0">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-premium to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Discover Your Perfect Collection</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Each collection tells a story of craftsmanship, elegance, and timeless design. 
                Find the pieces that speak to your personal style.
              </p>
              <Button asChild size="lg" className="bg-luxury hover:bg-luxury/90 text-luxury-foreground">
                <Link to="/products">
                  Start Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Collections;
