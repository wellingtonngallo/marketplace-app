declare module 'marketplace-host/context' {
  import { ComponentType, ReactNode } from 'react';

  export type ProductCart = {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
  };

  export function useCart(): {
    productsCart: ProductCart[];
    handleAddToCart: (product: ProductCart) => void;
  };

  export const CartContextProvider: ComponentType<{ children?: ReactNode }>;
  export default CartContextProvider;
}

declare module '*.css';
