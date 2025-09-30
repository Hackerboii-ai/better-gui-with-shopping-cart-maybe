import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <div className="text-6xl font-bold text-orange-500">404</div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Oops! Page Not Found
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Requested URL:</strong> {location.pathname}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/" className="inline-flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                <Link to="/products" className="inline-flex items-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Products
                </Link>
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Popular pages you might be looking for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link to="/deals" className="text-sm text-orange-600 hover:text-orange-700 underline">
                  Today's Deals
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/collections" className="text-sm text-orange-600 hover:text-orange-700 underline">
                  Collections
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/about" className="text-sm text-orange-600 hover:text-orange-700 underline">
                  About Us
                </Link>
                <span className="text-gray-300">•</span>
                <Link to="/contact" className="text-sm text-orange-600 hover:text-orange-700 underline">
                  Contact
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
