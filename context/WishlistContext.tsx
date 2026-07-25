"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type WishlistItem = {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
};

type WishlistContextType = {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
};

const WishlistContext =
  createContext<WishlistContextType | null>(null);

const STORAGE_KEY = "lividshop-wishlist";

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  function addToWishlist(item: WishlistItem) {
    setItems((current) => {
      if (
        current.find(
          (product) => product.id === item.id
        )
      ) {
        return current;
      }

      return [...current, item];
    });
  }

  function removeFromWishlist(id: number) {
    setItems((current) =>
      current.filter(
        (product) => product.id !== id
      )
    );
  }

  function isInWishlist(id: number) {
    return items.some(
      (product) => product.id === id
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider."
    );
  }

  return context;
}
