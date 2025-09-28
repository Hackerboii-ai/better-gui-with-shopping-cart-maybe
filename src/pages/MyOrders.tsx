import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Package, 
  Calendar, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  Clock, 
  XCircle,
  Eye,
  RefreshCw,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";

// Mock order data - in a real app, this would come from an API
const mockOrders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "delivered",
    total: 299.99,
    items: [
      {
        id: "1",
        name: "Luxury Watch",
        price: 199.99,
        quantity: 1,
        image: "/src/assets/product-watch.jpg"
      },
      {
        id: "2", 
        name: "Designer Sunglasses",
        price: 99.99,
        quantity: 1,
        image: "/src/assets/product-sunglasses.jpg"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    },
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "shipped",
    total: 149.99,
    items: [
      {
        id: "3",
        name: "Premium Handbag",
        price: 149.99,
        quantity: 1,
        image: "/src/assets/product-bag.jpg"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York", 
      state: "NY",
      zip: "10001"
    },
    trackingNumber: "TRK987654321"
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "processing",
    total: 79.99,
    items: [
      {
        id: "4",
        name: "Designer Sunglasses",
        price: 79.99,
        quantity: 1,
        image: "/src/assets/product-sunglasses.jpg"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY", 
      zip: "10001"
    },
    trackingNumber: null
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "shipped":
      return <Truck className="h-4 w-4 text-blue-500" />;
    case "processing":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "cancelled":
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return <Package className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800";
    case "shipped":
      return "bg-blue-100 text-blue-800";
    case "processing":
      return "bg-yellow-100 text-yellow-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const MyOrders = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleViewOrder = (orderId: string) => {
    setSelectedOrder(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  const selectedOrderData = selectedOrder ? mockOrders.find(order => order.id === selectedOrder) : null;

  if (selectedOrderData) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-background">
          <Header />
          
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackToOrders}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Orders
              </Button>
              
              <h1 className="text-3xl font-bold text-foreground">Order Details</h1>
              <p className="text-muted-foreground">Order #{selectedOrderData.id}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Order Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>Order Items</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedOrderData.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatCurrency(item.price)}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Order Date</span>
                      <span className="font-medium">{formatDate(selectedOrderData.date)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge className={getStatusColor(selectedOrderData.status)}>
                        {getStatusIcon(selectedOrderData.status)}
                        <span className="ml-1 capitalize">{selectedOrderData.status}</span>
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatCurrency(selectedOrderData.total)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">{formatCurrency(selectedOrderData.total)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Truck className="h-5 w-5" />
                      <span>Shipping Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium">{selectedOrderData.shippingAddress.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedOrderData.shippingAddress.street}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedOrderData.shippingAddress.city}, {selectedOrderData.shippingAddress.state} {selectedOrderData.shippingAddress.zip}
                    </p>
                    {selectedOrderData.trackingNumber && (
                      <div className="pt-2">
                        <p className="text-sm font-medium">Tracking Number:</p>
                        <p className="text-sm text-muted-foreground font-mono">
                          {selectedOrderData.trackingNumber}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
            <p className="text-muted-foreground">Track and manage your orders</p>
          </div>

          {mockOrders.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start shopping to see your orders here
                </p>
                <Button onClick={() => navigate("/products")}>
                  Start Shopping
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {mockOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Placed on {formatDate(order.date)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewOrder(order.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Total: {formatCurrency(order.total)}
                        </span>
                      </div>
                      {order.trackingNumber && (
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Track: {order.trackingNumber}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Track Order
                      </Button>
                      {order.status === "delivered" && (
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default MyOrders;
