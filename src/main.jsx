
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext.jsx'
import WishlistProvider from './context/WishlistContext.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import ScrollToTop from './components/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeProvider>
    <WishlistProvider>
    <CartProvider>
      <ScrollToTop />
      <App />
    </CartProvider>
    </WishlistProvider>
    </ThemeProvider>
  </BrowserRouter>
)
