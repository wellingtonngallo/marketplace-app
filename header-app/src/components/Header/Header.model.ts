import { useMemo, useState } from "react";
import { useCart } from "marketplace-host/context";

export const useHeader = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { productsCart } = useCart();

    const cartCount = useMemo(() => productsCart.length, [productsCart]);
  
    const handleCartDrawer = () => {
      setIsCartOpen(!isCartOpen);
    }

  return {
    isCartOpen,
    cartCount,
    handleCartDrawer,
  };
};