
import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 mt-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

    <div>
      <h2 className="text-2xl font-bold">ShopZone</h2>
      <p className="text-gray-400 mt-3">
        Your one-stop shop for quality products.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
      <ul className="space-y-2 text-gray-400">
        <Link to = "/" ><li>Home</li></Link>
        <Link to = "/products" ><li>Products</li></Link>
        <Link to = "/about" ><li>About</li></Link>
        <Link to = "/contact" ><li>Contact</li></Link>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Help Center</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
      <div className="flex gap-4 text-gray-400">
        <span> <FaFacebook /> </span>
        <span> <BsInstagram /> </span>
        <span> <BsTwitterX /> </span>
      </div>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
    © 2026 ShopZone. All rights reserved.
  </div>
</footer>
  )
}

export default Footer