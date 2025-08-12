import { createContext, useMemo, useState } from "react"

export type ProductCart = {
  id: number
  name: string
  price: number
  imageUrl?: string
}

export type CartProps = {
  productsCart: ProductCart[]
  handleAddToCart: (product: ProductCart) => void
}

export const CartContext = createContext({} as CartProps)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsCart, setProductsCart] = useState<ProductCart[]>([])

  const handleAddToCart = (product: ProductCart) => {
    if (productsCart.some((productCart) => productCart.id === product.id)) {
      handleRemoveFromCart(product.id)
    } else {
      setProductsCart([...productsCart, product])
    }
  }

  const handleRemoveFromCart = (productId: number) => {
    setProductsCart(productsCart.filter((productCart) => productCart.id !== productId))
  }

  const contextValue = useMemo(() => ({
    productsCart,
    handleAddToCart,
    handleRemoveFromCart
  }), [productsCart])


  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export default CartContextProvider

