"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "lividshop-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(STORAGE_KEY);

    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addToCart(item: CartItem) {
    setItems((current) => {
      const existing = current.find(
        (product) => product.id === item.id
      );

      if (existing) {
        return current.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity:
                  product.quantity + item.quantity,
              }
            : product
        );
      }

      return [
        ...current,
        {
          ...item,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setItems((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart
