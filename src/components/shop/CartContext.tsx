"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  slug: string;
  color: string;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  add: (item: CartItem) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "spicedice-cart";
const CartContext = createContext<CartContextValue | null>(null);

export function cartKey(item: Pick<CartItem, "slug" | "color" | "size">) {
  return `${item.slug}|${item.color}|${item.size ?? ""}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating from storage after mount
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // Storage unavailable — start with an empty cart.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore — the cart still works for this visit.
    }
  }, [items, loaded]);

  const value: CartContextValue = {
    items,
    count: items.reduce((n, i) => n + i.quantity, 0),
    add: (item) =>
      setItems((prev) => {
        const key = cartKey(item);
        const existing = prev.find((i) => cartKey(i) === key);
        if (existing) {
          return prev.map((i) =>
            cartKey(i) === key ? { ...i, quantity: i.quantity + item.quantity } : i
          );
        }
        return [...prev, item];
      }),
    setQuantity: (key, quantity) =>
      setItems((prev) =>
        quantity <= 0
          ? prev.filter((i) => cartKey(i) !== key)
          : prev.map((i) => (cartKey(i) === key ? { ...i, quantity } : i))
      ),
    remove: (key) => setItems((prev) => prev.filter((i) => cartKey(i) !== key)),
    clear: () => setItems([]),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
