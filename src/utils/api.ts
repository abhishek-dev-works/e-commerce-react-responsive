import axios from 'axios';
import { Product } from '@/store/slices/productSlice';
import { dummyProducts } from '@/data/dummyData';

// Create axios instance for API calls
const api = axios.create({
  baseURL: '/api', // In a real app, this would be your API base URL
  timeout: 10000,
});

// Simulated API functions using dummy data
export const apiService = {
  // Products
  getProducts: (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyProducts);
      }, 500); // Simulate network delay
    });
  },

  getProductById: (id: string): Promise<Product | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = dummyProducts.find(p => p.id === id) || null;
        resolve(product);
      }, 300);
    });
  },

  getProductsByCategory: (category: string): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = dummyProducts.filter(p => p.category === category);
        resolve(products);
      }, 400);
    });
  },

  searchProducts: (query: string): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = dummyProducts.filter(p => 
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
        );
        resolve(products);
      }, 600);
    });
  },

  // Authentication (dummy implementation)
  login: (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            user: {
              id: '1',
              name: 'John Doe',
              email: email,
            },
            token: 'dummy-jwt-token'
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  signup: (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          resolve({
            user: {
              id: '1',
              name: name,
              email: email,
            },
            token: 'dummy-jwt-token'
          });
        } else {
          reject(new Error('Invalid data'));
        }
      }, 1200);
    });
  },

  // Orders (dummy implementation)
  createOrder: (orderData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          orderId: `FK-${Date.now().toString().slice(-8)}`,
          status: 'confirmed',
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        });
      }, 2000);
    });
  },
};

export default api;