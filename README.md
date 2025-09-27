# Azure Store - Premium E-commerce Platform

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS. Features include authentication, shopping cart, product catalog, and customer support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/azure-store.git
   cd azure-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🛠️ Development Commands

### Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Stopping the Server

- **In terminal**: Press `Ctrl + C` (Windows/Linux) or `Cmd + C` (Mac)
- **Force stop**: Press `Ctrl + C` twice if the first attempt doesn't work

## 📦 Editing the Product Catalog

### Adding New Products

1. **Open the products file**
   ```
   src/lib/products.ts
   ```

2. **Add a new product object**
   ```typescript
   {
     id: "unique-id",
     name: "Product Name",
     price: 999.99,
     originalPrice: 1299.99, // Optional - for sale prices
     image: "/path/to/image.jpg",
     rating: 4.8,
     reviews: 150,
     isNew: true, // Optional - shows "New" badge
     isBestseller: false, // Optional - shows "Bestseller" badge
     category: "Watches", // Must match existing category
     description: "Product description here",
     inStock: true,
     tags: ["luxury", "premium", "designer"] // For search functionality
   }
   ```

3. **Update categories if needed**
   ```typescript
   export const categories = [
     "All",
     "Watches",
     "Bags", 
     "Jewelry",
     "Accessories",
     "Your New Category" // Add here
   ];
   ```

### Modifying Existing Products

1. **Find the product in `src/lib/products.ts`**
2. **Update any properties**:
   - `name`: Product title
   - `price`: Current price
   - `originalPrice`: Original price (for discounts)
   - `description`: Product description
   - `rating`: 1-5 star rating
   - `reviews`: Number of reviews
   - `isNew`: Show "New" badge
   - `isBestseller`: Show "Bestseller" badge
   - `category`: Product category
   - `tags`: Search keywords

### Adding Product Images

1. **Place images in the assets folder**
   ```
   src/assets/your-product-image.jpg
   ```

2. **Update the image path in the product object**
   ```typescript
   image: "/src/assets/your-product-image.jpg"
   ```

### Creating New Collections

1. **Edit `src/pages/Collections.tsx`**
2. **Add to the collections array**:
   ```typescript
   {
     id: "collection-id",
     name: "Collection Name",
     description: "Collection description",
     image: "/src/assets/collection-image.jpg",
     productCount: 5,
     featured: true, // Show in featured section
     category: "Watches" // Must match product category
   }
   ```

## 🎨 Customization

### Branding

1. **Update brand name** in:
   - `src/components/Header.tsx` (line 38)
   - `src/pages/Login.tsx` (line 179)
   - `src/components/Hero.tsx` (line 32)
   - `index.html` (title and meta tags)

2. **Update colors** in `tailwind.config.ts`:
   ```typescript
   colors: {
     luxury: "your-color",
     premium: "your-color",
     accent: "your-color"
   }
   ```

### Authentication

1. **Demo credentials** in `src/lib/auth.ts`:
   ```typescript
   email: 'demo@azure-store.com',
   password: 'password123'
   ```

2. **Add more demo users** by adding to the `mockUsers` array

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Homepage hero section
│   ├── ProductCard.tsx # Product display card
│   └── SearchModal.tsx # Search functionality
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state
│   └── CartContext.tsx # Shopping cart state
├── hooks/              # Custom React hooks
├── lib/                # Utilities and data
│   ├── auth.ts         # Authentication logic
│   ├── products.ts     # Product data and utilities
│   └── validation.ts   # Form validation
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Products.tsx    # Product catalog
│   ├── Collections.tsx # Product collections
│   ├── About.tsx       # About page
│   ├── Cart.tsx        # Shopping cart
│   ├── Login.tsx       # Authentication
│   └── CustomerCare.tsx # Support page
└── assets/             # Images and static files
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:
```env
VITE_APP_NAME=Azure Store
VITE_APP_URL=https://azure-store.com
```

### Build Configuration

The app uses Vite for building. Configuration is in `vite.config.ts`.

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - Push to main branch to trigger deployment

### Netlify

1. **Connect repository to Netlify**
2. **Set build command**: `npm run build`
3. **Set publish directory**: `dist`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   ```

2. **Dependencies issues**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check for TypeScript errors
   npm run lint
   ```

### Development Tips

- Use `npm run dev` for development with hot reload
- Check browser console for errors
- Use React Developer Tools for debugging
- Test on different screen sizes for responsiveness

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@azure-store.com
- Create an issue in the GitHub repository

---

**Happy coding! 🎉**