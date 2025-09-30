import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingBag, Star, Search, Filter, ArrowLeft, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Category = () => {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Mock products for different categories
  const categoryProducts = {
    electronics: [
      { id: "1", name: "iPhone 15 Pro", price: 999, originalPrice: 1199, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 1250, isNew: true },
      { id: "2", name: "MacBook Air M2", price: 1199, originalPrice: 1299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center", rating: 3.9, reviews: 890, isBestseller: true },
      { id: "3", name: "Samsung Galaxy S24", price: 799, originalPrice: 899, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 567, isNew: false },
      { id: "19", name: "iPad Pro 12.9-inch", price: 1099, originalPrice: 1299, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 892, isNew: true },
      { id: "20", name: "Dell XPS 13 Laptop", price: 1299, originalPrice: 1499, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 445, isBestseller: true },
      { id: "21", name: "Sony WH-1000XM5 Headphones", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 1234, isNew: false },
      { id: "22", name: "Nintendo Switch OLED", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&crop=center", rating: 4.1, reviews: 678, isNew: true },
      { id: "23", name: "Samsung 55-inch 4K TV", price: 699, originalPrice: 899, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isBestseller: true },
      { id: "24", name: "Apple Watch Series 9", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 567, isNew: false },
      { id: "25", name: "Canon EOS R6 Camera", price: 2499, originalPrice: 2799, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center", rating: 4.3, reviews: 345, isNew: true },
      { id: "26", name: "Microsoft Surface Pro 9", price: 999, originalPrice: 1199, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center", rating: 4.1, reviews: 456, isBestseller: true },
      { id: "27", name: "Bose QuietComfort 45", price: 329, originalPrice: 399, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center", rating: 4.3, reviews: 789, isNew: false },
      { id: "28", name: "PlayStation 5 Console", price: 499, originalPrice: 599, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&crop=center", rating: 4.1, reviews: 1234, isNew: true },
      { id: "29", name: "LG 27-inch 4K Monitor", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 234, isBestseller: true },
      { id: "30", name: "AirPods Pro 2nd Gen", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&crop=center", rating: 4.2, reviews: 890, isNew: false },
      { id: "31", name: "DJI Mini 3 Drone", price: 759, originalPrice: 899, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop&crop=center", rating: 4.3, reviews: 345, isNew: true },
      { id: "32", name: "ASUS ROG Gaming Laptop", price: 1599, originalPrice: 1799, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 456, isBestseller: true },
      { id: "33", name: "Fitbit Versa 4 Smartwatch", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center", rating: 4.4, reviews: 567, isNew: false },
      { id: "34", name: "Echo Dot 5th Gen", price: 49, originalPrice: 69, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 1234, isNew: true },
      { id: "35", name: "Logitech MX Master 3S", price: 99, originalPrice: 129, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center", rating: 4.4, reviews: 678, isBestseller: true },
    ],
    fashion: [
      { id: "4", name: "Designer Handbag", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "5", name: "Luxury Watch", price: 1299, originalPrice: 1599, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 445, isBestseller: true },
      { id: "6", name: "Sunglasses Elite", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 123, isNew: false },
      { id: "36", name: "Nike Air Max 270", price: 150, originalPrice: 180, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 567, isNew: true },
      { id: "37", name: "Levi's 501 Jeans", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "38", name: "Adidas Ultraboost 22", price: 180, originalPrice: 220, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 345, isNew: false },
      { id: "39", name: "Ray-Ban Aviator Sunglasses", price: 154, originalPrice: 199, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 456, isNew: true },
      { id: "40", name: "Champion Hoodie", price: 65, originalPrice: 85, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 123, isBestseller: true },
      { id: "41", name: "Vans Old Skool Sneakers", price: 60, originalPrice: 80, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: false },
      { id: "42", name: "Gucci Belt", price: 450, originalPrice: 550, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 89, isNew: true },
      { id: "43", name: "North Face Jacket", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isBestseller: true },
      { id: "44", name: "Converse Chuck Taylor", price: 55, originalPrice: 70, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 567, isNew: false },
      { id: "45", name: "Rolex Submariner", price: 8999, originalPrice: 10999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 45, isNew: true },
      { id: "46", name: "Polo Ralph Lauren Shirt", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "47", name: "Oakley Sunglasses", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isNew: false },
      { id: "48", name: "Yeezy Boost 350", price: 220, originalPrice: 280, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 456, isNew: true },
      { id: "49", name: "Tommy Hilfiger Polo", price: 75, originalPrice: 95, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isBestseller: true },
      { id: "50", name: "Prada Handbag", price: 1299, originalPrice: 1599, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 67, isNew: false },
    ],
    home: [
      { id: "7", name: "Modern Sofa", price: 899, originalPrice: 1199, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isNew: true },
      { id: "8", name: "Coffee Table", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "9", name: "Floor Lamp", price: 149, originalPrice: 199, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center", rating: 4.4, reviews: 156, isNew: false },
      { id: "51", name: "IKEA Billy Bookcase", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isNew: true },
      { id: "52", name: "Dyson V15 Vacuum", price: 649, originalPrice: 749, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 456, isBestseller: true },
      { id: "53", name: "KitchenAid Stand Mixer", price: 329, originalPrice: 399, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isNew: false },
      { id: "54", name: "Tempur-Pedic Pillow", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 567, isNew: true },
      { id: "55", name: "Nespresso Vertuo Machine", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isBestseller: true },
      { id: "56", name: "West Elm Dining Table", price: 1299, originalPrice: 1599, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isNew: false },
      { id: "57", name: "Philips Hue Smart Bulbs", price: 49, originalPrice: 69, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: true },
      { id: "58", name: "Casper Mattress", price: 1095, originalPrice: 1295, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 456, isBestseller: true },
      { id: "59", name: "Roomba i7+ Robot Vacuum", price: 599, originalPrice: 699, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: false },
      { id: "60", name: "Le Creuset Dutch Oven", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 123, isNew: true },
      { id: "61", name: "Pottery Barn Throw Pillow", price: 39, originalPrice: 59, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isBestseller: true },
      { id: "62", name: "Instant Pot Duo", price: 99, originalPrice: 129, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 567, isNew: false },
      { id: "63", name: "Wayfair Area Rug", price: 199, originalPrice: 299, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: true },
      { id: "64", name: "Vitamix Blender", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 234, isBestseller: true },
      { id: "65", name: "Crate & Barrel Vase", price: 79, originalPrice: 99, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.4, reviews: 123, isNew: false },
    ],
    sports: [
      { id: "10", name: "Running Shoes", price: 129, originalPrice: 179, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 567, isNew: true },
      { id: "11", name: "Yoga Mat", price: 49, originalPrice: 69, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "12", name: "Dumbbells Set", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isNew: false },
      { id: "66", name: "Peloton Bike", price: 1445, originalPrice: 1695, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: true },
      { id: "67", name: "Wilson Tennis Racket", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isBestseller: true },
      { id: "68", name: "Under Armour Training Shoes", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isNew: false },
      { id: "69", name: "Bowflex Adjustable Dumbbells", price: 549, originalPrice: 699, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isNew: true },
      { id: "70", name: "Lululemon Leggings", price: 98, originalPrice: 128, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 456, isBestseller: true },
      { id: "71", name: "Garmin Forerunner 945", price: 599, originalPrice: 699, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isNew: false },
      { id: "72", name: "Everlast Boxing Gloves", price: 39, originalPrice: 59, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: true },
      { id: "73", name: "Nike Dri-FIT T-Shirt", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 567, isBestseller: true },
      { id: "74", name: "Hydro Flask Water Bottle", price: 35, originalPrice: 45, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: false },
      { id: "75", name: "TRX Suspension Trainer", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isNew: true },
      { id: "76", name: "Adidas Soccer Ball", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "77", name: "Fitbit Charge 5", price: 179, originalPrice: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isNew: false },
      { id: "78", name: "YETI Cooler", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 234, isNew: true },
      { id: "79", name: "Reebok CrossFit Shoes", price: 120, originalPrice: 150, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isBestseller: true },
      { id: "80", name: "Resistance Bands Set", price: 19, originalPrice: 29, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 456, isNew: false },
    ],
    beauty: [
      { id: "13", name: "Skincare Set", price: 79, originalPrice: 99, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 345, isNew: true },
      { id: "14", name: "Makeup Kit", price: 149, originalPrice: 199, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "15", name: "Hair Care Bundle", price: 59, originalPrice: 79, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center", rating: 4.4, reviews: 156, isNew: false },
      { id: "81", name: "La Mer Moisturizer", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isNew: true },
      { id: "82", name: "Dyson Hair Dryer", price: 399, originalPrice: 499, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isBestseller: true },
      { id: "83", name: "Charlotte Tilbury Foundation", price: 45, originalPrice: 55, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: false },
      { id: "84", name: "The Ordinary Serum Set", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 456, isNew: true },
      { id: "85", name: "Olaplex Hair Treatment", price: 28, originalPrice: 38, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isBestseller: true },
      { id: "86", name: "Fenty Beauty Lipstick", price: 19, originalPrice: 25, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isNew: false },
      { id: "87", name: "Drunk Elephant Vitamin C", price: 78, originalPrice: 98, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "88", name: "Glossier Boy Brow", price: 16, originalPrice: 22, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 345, isBestseller: true },
      { id: "89", name: "Kiehl's Face Cream", price: 35, originalPrice: 45, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: false },
      { id: "90", name: "Anastasia Brow Wiz", price: 23, originalPrice: 29, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isNew: true },
      { id: "91", name: "Tatcha Water Cream", price: 68, originalPrice: 78, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "92", name: "NARS Blush", price: 30, originalPrice: 38, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isNew: false },
      { id: "93", name: "Sunday Riley Retinol", price: 85, originalPrice: 105, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isNew: true },
      { id: "94", name: "Urban Decay Eyeshadow", price: 54, originalPrice: 64, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isBestseller: true },
      { id: "95", name: "CeraVe Cleanser", price: 15, originalPrice: 20, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 456, isNew: false },
    ],
    books: [
      { id: "16", name: "Best Seller Novel", price: 16, originalPrice: 24, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 567, isNew: true },
      { id: "17", name: "Programming Guide", price: 39, originalPrice: 49, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isBestseller: true },
      { id: "18", name: "Cookbook Collection", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isNew: false },
      { id: "96", name: "Atomic Habits", price: 18, originalPrice: 25, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 1234, isNew: true },
      { id: "97", name: "The Great Gatsby", price: 12, originalPrice: 16, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 456, isBestseller: true },
      { id: "98", name: "JavaScript: The Good Parts", price: 35, originalPrice: 45, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isNew: false },
      { id: "99", name: "Harry Potter Box Set", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 567, isNew: true },
      { id: "100", name: "The Alchemist", price: 15, originalPrice: 20, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isBestseller: true },
      { id: "101", name: "Python Crash Course", price: 42, originalPrice: 52, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: false },
      { id: "102", name: "To Kill a Mockingbird", price: 14, originalPrice: 18, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 456, isNew: true },
      { id: "103", name: "Clean Code", price: 48, originalPrice: 58, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 123, isBestseller: true },
      { id: "104", name: "1984 by George Orwell", price: 13, originalPrice: 17, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: false },
      { id: "105", name: "React Documentation", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: true },
      { id: "106", name: "Pride and Prejudice", price: 11, originalPrice: 15, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isBestseller: true },
      { id: "107", name: "Design Patterns", price: 55, originalPrice: 65, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isNew: false },
      { id: "108", name: "The Catcher in the Rye", price: 16, originalPrice: 22, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isNew: true },
      { id: "109", name: "Node.js Guide", price: 38, originalPrice: 48, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 345, isBestseller: true },
      { id: "110", name: "Lord of the Rings Trilogy", price: 45, originalPrice: 60, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center", rating: 4.9, reviews: 456, isNew: false },
    ],
    automotive: [
      { id: "111", name: "Car Phone Mount", price: 19, originalPrice: 29, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "112", name: "Dash Cam 4K", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isBestseller: true },
      { id: "113", name: "Car Air Freshener", price: 8, originalPrice: 12, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 123, isNew: false },
      { id: "114", name: "Bluetooth Car Adapter", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "115", name: "Car Seat Covers", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
    ],
    toys: [
      { id: "116", name: "LEGO Creator Set", price: 79, originalPrice: 99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isNew: true },
      { id: "117", name: "Barbie Dreamhouse", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isBestseller: true },
      { id: "118", name: "Nerf Blaster", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 345, isNew: false },
      { id: "119", name: "Hot Wheels Track Set", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isNew: true },
      { id: "120", name: "Play-Doh Set", price: 15, originalPrice: 22, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isBestseller: true },
    ],
    health: [
      { id: "121", name: "Digital Thermometer", price: 19, originalPrice: 29, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: true },
      { id: "122", name: "Blood Pressure Monitor", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isBestseller: true },
      { id: "123", name: "Vitamin D3 Supplements", price: 12, originalPrice: 18, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 345, isNew: false },
      { id: "124", name: "Pulse Oximeter", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isNew: true },
      { id: "125", name: "First Aid Kit", price: 35, originalPrice: 50, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
    ],
    pet: [
      { id: "126", name: "Dog Food Bowl Set", price: 15, originalPrice: 25, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "127", name: "Cat Scratching Post", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
      { id: "128", name: "Pet Carrier", price: 35, originalPrice: 50, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 345, isNew: false },
      { id: "129", name: "Dog Leash", price: 12, originalPrice: 18, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "130", name: "Cat Litter Box", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
    ],
    office: [
      { id: "131", name: "Ergonomic Office Chair", price: 199, originalPrice: 299, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 234, isNew: true },
      { id: "132", name: "Standing Desk", price: 299, originalPrice: 399, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 123, isBestseller: true },
      { id: "133", name: "Wireless Mouse", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 345, isNew: false },
      { id: "134", name: "Monitor Stand", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 234, isNew: true },
      { id: "135", name: "Desk Organizer", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
    ],
    garden: [
      { id: "136", name: "Garden Hose 50ft", price: 35, originalPrice: 50, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 234, isNew: true },
      { id: "137", name: "Plant Pots Set", price: 25, originalPrice: 35, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center", rating: 4.7, reviews: 123, isBestseller: true },
      { id: "138", name: "Garden Tools Kit", price: 45, originalPrice: 65, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center", rating: 4.5, reviews: 345, isNew: false },
      { id: "139", name: "Outdoor Solar Lights", price: 29, originalPrice: 39, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center", rating: 4.8, reviews: 234, isNew: true },
      { id: "140", name: "Garden Gloves", price: 12, originalPrice: 18, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center", rating: 4.6, reviews: 123, isBestseller: true },
    ],
  };

  const products = categoryProducts[categoryName as keyof typeof categoryProducts] || [];
  const categoryTitle = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : "Category";

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group relative overflow-hidden border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-lg">
      <div className="relative overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <Badge className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Bestseller
            </Badge>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm transition-all duration-200 text-gray-600 hover:text-red-500 hover:bg-red-50"
        >
          <Heart className="w-4 h-4" />
        </Button>

        <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium py-2 shadow-lg">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-3">
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer text-sm">
          {product.name}
        </h3>

        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <div className="mt-2 text-xs text-gray-600">
          <span className="text-green-600 font-medium">FREE delivery</span>
        </div>
      </CardContent>
    </Card>
  );

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryTitle}</h1>
          <p className="text-gray-600">Discover amazing products in this category</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
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
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex border border-gray-300 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {products.length} products in {categoryTitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
