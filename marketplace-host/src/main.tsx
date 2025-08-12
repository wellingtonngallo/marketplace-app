import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage/Home.page.tsx'
import { CartContextProvider } from './context/CartContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <HomePage />
    </CartContextProvider>
  </StrictMode>,
)
