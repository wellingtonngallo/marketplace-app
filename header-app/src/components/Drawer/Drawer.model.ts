import { useMemo } from "react";
import { useCart } from "marketplace-host/context";
import { formatCurrency } from "../../utils/formatCurrency";

export const useDrawer = () => {
  const { productsCart } = useCart();

  const subTotal = useMemo(() => {
    const subTotal = productsCart.reduce((sum: number, p: any) => sum + Number(p.price ?? 0), 0);
    const formattedSubTotal = formatCurrency(subTotal);
    
    return formattedSubTotal;
  }, [productsCart]);

  return {
    subTotal,
    productsCart,
  };
};