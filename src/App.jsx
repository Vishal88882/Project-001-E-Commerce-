
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
import Help from './pages/Help'
import Return from './pages/Return'
import ShippingDetails from './pages/ShippingDetails'


const App = () => {
  return (
    <div className='bg-gray-200  min-h-screen w-full mt-0 ml-0 text-red-500 dark:bg-black dark:text-white' id="Main-Container">
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
         <Route path = "/helpcenter" element = {<Help />} />
         <Route path = "/returns" element = {<Return />} />
         <Route path = "/shippingdetails" element = {<ShippingDetails />} />
       </Routes>
       <Footer />
    </div>
  )
}

export default App