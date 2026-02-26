"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product, CartItem } from "../types";

interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddToCart: (product: Product, quantity: number) => void;
    handleUpdateQuantity: (id: string, delta: number) => void;
    handleRemoveFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (product: Product, quantity: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
    };

    const handleUpdateQuantity = (id: string, delta: number) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    return { ...item, quantity: Math.max(0, newQuantity) };
                }
                return item;
            }).filter((item) => item.quantity > 0)
        );
    };

    const handleRemoveFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                isCartOpen,
                setIsCartOpen,
                handleAddToCart,
                handleUpdateQuantity,
                handleRemoveFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
