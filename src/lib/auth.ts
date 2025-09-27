// Authentication utilities and token management
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Mock user database (in production, this would be a real database)
const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    email: 'demo@azure-store.com',
    firstName: 'Demo',
    lastName: 'User',
    phone: '+1 (555) 123-4567',
    password: 'password123' // In production, this would be hashed
  }
];

// JWT Secret (in production, this should be in environment variables)
const JWT_SECRET = 'azure-store-secret-key-2024';

// Generate a simple JWT token (in production, use a proper JWT library)
const generateToken = (userId: string): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ 
    userId, 
    exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
  }));
  const signature = btoa(`${header}.${payload}.${JWT_SECRET}`);
  return `${header}.${payload}.${signature}`;
};

// Verify JWT token
export const verifyToken = (token: string): { userId: string } | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = JSON.parse(atob(parts[1]));
    
    // Check if token is expired
    if (payload.exp < Date.now()) {
      return null;
    }
    
    return { userId: payload.userId };
  } catch {
    return null;
  }
};

// Login function
export const login = async (email: string, password: string): Promise<AuthResponse | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return null;
  }
  
  const token = generateToken(user.id);
  
  // Store token in localStorage
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_data', JSON.stringify({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone
  }));
  
  return {
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone
    },
    token
  };
};

// Register function
export const register = async (
  email: string, 
  password: string, 
  firstName: string, 
  lastName: string, 
  phone?: string
): Promise<AuthResponse | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return null;
  }
  
  // Create new user
  const newUser = {
    id: (mockUsers.length + 1).toString(),
    email,
    password, // In production, hash this password
    firstName,
    lastName,
    phone
  };
  
  mockUsers.push(newUser);
  
  const token = generateToken(newUser.id);
  
  // Store token in localStorage
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_data', JSON.stringify({
    id: newUser.id,
    email: newUser.email,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    phone: newUser.phone
  }));
  
  return {
    user: {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone
    },
    token
  };
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userData = localStorage.getItem('user_data');
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch {
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth_token');
  if (!token) return false;
  
  const decoded = verifyToken(token);
  return decoded !== null;
};

// Get auth token
export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};
