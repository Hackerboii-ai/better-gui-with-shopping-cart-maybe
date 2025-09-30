import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, User, Menu, X, LogOut, MapPin, ChevronDown, Gift, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import SearchModal from "@/components/SearchModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItemsCount } = useCart();

  const navigationItems = [
    { name: "Products", href: "/products" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-orange-200">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Gift className="h-3 w-3" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-1">
                <Truck className="h-3 w-3" />
                <span>Same day delivery available</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Customer Service: 1-800-AZURE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">AZURE</span>
                <span className="text-xs text-orange-600 font-medium">STORE</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  placeholder="Search for products, brands and more..."
                  className="w-full h-10 pl-4 pr-12 border-2 border-orange-200 focus:border-orange-500 rounded-l-md"
                  onClick={() => setIsSearchOpen(true)}
                />
                <Button
                  className="absolute right-0 top-0 h-10 px-6 bg-orange-500 hover:bg-orange-600 rounded-l-none rounded-r-md"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Location */}
              <div className="hidden lg:flex items-center space-x-1 text-sm text-gray-700 hover:text-orange-600 cursor-pointer">
                <MapPin className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Deliver to</span>
                  <span className="font-medium">New York</span>
                </div>
                <ChevronDown className="h-3 w-3" />
              </div>
              
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
                      <User className="h-5 w-5" />
                      <div className="hidden sm:flex flex-col text-left">
                        <span className="text-xs text-gray-500">Hello,</span>
                        <span className="font-medium text-sm">{user?.firstName}</span>
                      </div>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5 text-sm font-medium">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <div className="px-2 py-1.5 text-xs text-muted-foreground">
                      {user?.email}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders" className="cursor-pointer">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600"
                  onClick={() => navigate('/login')}
                >
                  <User className="h-5 w-5" />
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-xs text-gray-500">Hello, Sign in</span>
                    <span className="font-medium text-sm">Account & Lists</span>
                  </div>
                </Button>
              )}
              
              <Button 
                variant="ghost" 
                className="relative flex items-center space-x-1 text-gray-700 hover:text-orange-600"
                onClick={() => navigate('/cart')}
              >
                <ShoppingBag className="h-5 w-5" />
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs text-gray-500">Returns</span>
                  <span className="font-medium text-sm">& Orders</span>
                </div>
                {cartItemsCount > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-500 text-white"
                  >
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="hidden md:flex items-center justify-between py-2 border-t border-gray-200">
            <nav className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-orange-600 font-medium">Today's Deals</span>
              <span className="text-gray-600">Gift Cards</span>
              <span className="text-gray-600">Sell</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto font-medium text-gray-700 hover:text-orange-600"
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </nav>
          </div>
        </div>
      )}
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
};

export default Header;