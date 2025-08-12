import { useContext } from "react"
import { CartContext } from '../context/CartContextProvider';

export const useCart = () => {
  const context = useContext(CartContext)
  
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider")
  }
  
  return context
}