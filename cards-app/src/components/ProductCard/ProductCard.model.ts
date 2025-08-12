import { useCallback, useMemo, useState } from "react";
import { type ProductCart, useCart } from 'marketplace-host/context';
import type { UseProductCardProps } from "./ProductCard.type";

const STAR_VALUES = [1, 2, 3, 4, 5] as const;
export const useProductCard = ({ rating, id }: UseProductCardProps) => {
  const { handleAddToCart, productsCart } = useCart();
  const [productImageLoaded, setProductImageLoaded] = useState(false);

  const levelRating = useMemo(() => {
    const level = Math.max(0, Math.min(5, rating));
    return Math.round(level);
  }, [rating]);

  const handleProductImageLoaded = useCallback(() => {
    setProductImageLoaded(true);
  }, []);

  const productAlreadyInCart = useMemo(() => {
    return productsCart.some((product: ProductCart) => product.id === id);
  }, [productsCart, id]);

  return {
    levelRating,
    STAR_VALUES,
    productImageLoaded,
    productAlreadyInCart,
    handleProductImageLoaded,
    handleAddToCart
  };
};
