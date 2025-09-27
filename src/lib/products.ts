// Product data and utilities
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  category: string;
  description: string;
  inStock: boolean;
  tags: string[];
}

// Mock product database
export const products: Product[] = [
  {
    id: "1",
    name: "Classic Timepiece Collection",
    price: 2499.99,
    originalPrice: 2999.99,
    image: "/src/assets/product-watch.jpg",
    rating: 4.9,
    reviews: 128,
    isNew: true,
    isBestseller: false,
    category: "Watches",
    description: "A timeless classic that combines elegance with precision engineering. Crafted from the finest materials.",
    inStock: true,
    tags: ["luxury", "classic", "premium"]
  },
  {
    id: "2",
    name: "Premium Leather Handbag",
    price: 1299.99,
    image: "/src/assets/product-bag.jpg",
    rating: 4.8,
    reviews: 96,
    isNew: false,
    isBestseller: true,
    category: "Bags",
    description: "Handcrafted from the finest Italian leather, this handbag is a statement of sophistication.",
    inStock: true,
    tags: ["leather", "handcrafted", "italian"]
  },
  {
    id: "3",
    name: "Designer Sunglasses Elite",
    price: 599.99,
    originalPrice: 799.99,
    image: "/src/assets/product-sunglasses.jpg",
    rating: 4.7,
    reviews: 204,
    isNew: false,
    isBestseller: false,
    category: "Accessories",
    description: "Protect your eyes in style with these premium designer sunglasses featuring UV protection.",
    inStock: true,
    tags: ["designer", "uv-protection", "style"]
  },
  {
    id: "4",
    name: "Luxury Gold Chain",
    price: 899.99,
    image: "/src/assets/product-watch.jpg", // Using placeholder
    rating: 4.6,
    reviews: 87,
    isNew: true,
    isBestseller: false,
    category: "Jewelry",
    description: "Elegant 18k gold chain perfect for any occasion. A timeless piece of luxury.",
    inStock: true,
    tags: ["gold", "luxury", "jewelry"]
  },
  {
    id: "5",
    name: "Executive Briefcase",
    price: 1599.99,
    originalPrice: 1899.99,
    image: "/src/assets/product-bag.jpg", // Using placeholder
    rating: 4.9,
    reviews: 156,
    isNew: false,
    isBestseller: true,
    category: "Bags",
    description: "Professional briefcase made from premium materials. Perfect for the modern executive.",
    inStock: true,
    tags: ["executive", "professional", "premium"]
  },
  {
    id: "6",
    name: "Diamond Earrings",
    price: 3299.99,
    image: "/src/assets/product-sunglasses.jpg", // Using placeholder
    rating: 4.8,
    reviews: 73,
    isNew: false,
    isBestseller: false,
    category: "Jewelry",
    description: "Exquisite diamond earrings that sparkle with elegance and sophistication.",
    inStock: true,
    tags: ["diamond", "elegant", "sparkle"]
  },
  {
    id: "7",
    name: "Smart Watch Pro",
    price: 799.99,
    originalPrice: 999.99,
    image: "/src/assets/product-watch.jpg", // Using placeholder
    rating: 4.5,
    reviews: 234,
    isNew: true,
    isBestseller: true,
    category: "Watches",
    description: "The latest in smartwatch technology with health monitoring and premium design.",
    inStock: true,
    tags: ["smart", "technology", "health"]
  },
  {
    id: "8",
    name: "Silk Scarf Collection",
    price: 299.99,
    image: "/src/assets/product-bag.jpg", // Using placeholder
    rating: 4.4,
    reviews: 189,
    isNew: false,
    isBestseller: false,
    category: "Accessories",
    description: "Luxurious silk scarves in various patterns. A perfect accessory for any outfit.",
    inStock: true,
    tags: ["silk", "luxury", "patterns"]
  },
  {
    id: "9",
    name: "Platinum Ring",
    price: 1899.99,
    image: "/src/assets/product-sunglasses.jpg", // Using placeholder
    rating: 4.7,
    reviews: 92,
    isNew: true,
    isBestseller: false,
    category: "Jewelry",
    description: "Stunning platinum ring with intricate design. A symbol of eternal love and commitment.",
    inStock: true,
    tags: ["platinum", "ring", "eternal"]
  },
  {
    id: "10",
    name: "Travel Backpack",
    price: 699.99,
    originalPrice: 899.99,
    image: "/src/assets/product-bag.jpg", // Using placeholder
    rating: 4.6,
    reviews: 167,
    isNew: false,
    isBestseller: true,
    category: "Bags",
    description: "Premium travel backpack with multiple compartments and weather-resistant material.",
    inStock: true,
    tags: ["travel", "backpack", "weather-resistant"]
  },
  {
    id: "11",
    name: "Vintage Pocket Watch",
    price: 1299.99,
    image: "/src/assets/product-watch.jpg", // Using placeholder
    rating: 4.8,
    reviews: 45,
    isNew: false,
    isBestseller: false,
    category: "Watches",
    description: "Authentic vintage pocket watch with intricate engravings. A collector's dream.",
    inStock: true,
    tags: ["vintage", "collector", "engravings"]
  },
  {
    id: "12",
    name: "Pearl Necklace",
    price: 1599.99,
    originalPrice: 1999.99,
    image: "/src/assets/product-sunglasses.jpg", // Using placeholder
    rating: 4.9,
    reviews: 118,
    isNew: false,
    isBestseller: true,
    category: "Jewelry",
    description: "Classic pearl necklace with perfectly matched pearls. Timeless elegance.",
    inStock: true,
    tags: ["pearl", "classic", "elegance"]
  }
];

export const categories = [
  "All",
  "Watches",
  "Bags",
  "Jewelry",
  "Accessories"
];

export const sortOptions = [
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
  { value: "price-asc", label: "Price Low to High" },
  { value: "price-desc", label: "Price High to Low" },
  { value: "rating-desc", label: "Highest Rated" },
  { value: "newest", label: "Newest First" }
];

export const filterProducts = (
  products: Product[],
  searchTerm: string,
  category: string,
  sortBy: string,
  priceRange: [number, number]
): Product[] => {
  let filtered = products;

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  // Filter by category
  if (category && category !== "All") {
    filtered = filtered.filter(product => product.category === category);
  }

  // Filter by price range
  filtered = filtered.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  switch (sortBy) {
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filtered.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
      break;
    default:
      break;
  }

  return filtered;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
