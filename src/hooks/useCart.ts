
import { useState, useEffect } from 'react';
import { cartManager, CartItem } from '@/lib/cart';
import { Product } from '@/lib/data';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(cartManager.items);
  const [isOpen, setIsOpen] = useState(cartManager.isOpen);

  useEffect(() => {
    const unsubscribe = cartManager.subscribe(() => {
      setItems([...cartManager.items]);
      setIsOpen(cartManager.isOpen);
    });

    return unsubscribe;
  }, []);

  const addItem = (product: Product, quantity?: number, color?: string, size?: string) => {
    cartManager.addItem(product, quantity, color, size);
  };

  const removeItem = (productId: number) => {
    cartManager.removeItem(productId);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    cartManager.updateQuantity(productId, quantity);
  };

  const clearCart = () => {
    cartManager.clearCart();
  };

  const getTotalPrice = () => {
    return cartManager.getTotalPrice();
  };

  const getTotalItems = () => {
    return cartManager.getTotalItems();
  };

  const openCart = () => {
    cartManager.openCart();
  };

  const closeCart = () => {
    cartManager.closeCart();
  };

  return {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    openCart,
    closeCart
  };
}
