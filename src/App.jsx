import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import ProductsDetails from './pages/ProductsDetails'
import { Toaster } from 'sonner'
import Wishlist from './pages/Wishlist'
import { ThemeContext } from './context/ThemeContext'


const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className='bg-gray-200 min-h-screen w-screen text-red-500 dark:bg-black dark:text-white' id="Main-Container">
      <Navbar />
       <Toaster
        position="top-center"
        richColors
        closeButton
        duration={2000}
      />
       <Routes>
         <Route path = "/" element = {<Home />} />
         <Route path = "/products" element = {<Products />} />
         <Route path = "/about" element = {< About />} />
         <Route path = "/contact" element = {<Contact />} />
         <Route path = "/cart" element = {<Cart />} />
         <Route path = "/products/:id" element = {<ProductsDetails />} />
         <Route path = "/wishlist" element =  {<Wishlist />} />
         <Route path = "*" element = {<NotFound />} />
       </Routes>
       <Footer />
    </div>
  )
}

export default App