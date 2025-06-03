
import { Product } from './data';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  openCart: () => void;
  closeCart: () => void;
}

class CartManager implements CartStore {
  items: CartItem[] = [];
  isOpen = false;
  listeners: (() => void)[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    }
  }

  private saveToStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  addItem(product: Product, quantity = 1, color?: string, size?: string) {
    const existingIndex = this.items.findIndex(
      item => item.product.id === product.id && 
               item.selectedColor === color && 
               item.selectedSize === size
    );

    if (existingIndex >= 0) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        product,
        quantity,
        selectedColor: color,
        selectedSize: size
      });
    }

    this.saveToStorage();
    this.notify();
    this.openCart();
  }

  removeItem(productId: number) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveToStorage();
    this.notify();
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
      this.notify();
    }
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
    this.notify();
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  openCart() {
    this.isOpen = true;
    this.notify();
  }

  closeCart() {
    this.isOpen = false;
    this.notify();
  }
}

export const cartManager = new CartManager();
