import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Lock, Eye, EyeOff } from 'lucide-react'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Signup Data:', formData)
  }

  return (
    <div
      id="Signup-Container"
      className="min-h-[85vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
    >
      <div className="w-full max-w-lg">
        
      
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black">
            Create <span className="text-red-600">Account</span>
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Join us today. Enter your details below to get started.
          </p>
        </div>

  
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg space-y-5"
        >
    
          <div>
            <label className="text-sm text-gray-500 block mb-1">Full Name</label>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <User className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type="text"
                name="name"
                required
                placeholder="Raj Yadav"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

       
          <div>
            <label className="text-sm text-gray-500 block mb-1">Email Address</label>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <Mail className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type="email"
                name="email"
                required
                placeholder="rajyadav12556@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 block mb-1">Phone</label>
              <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="8512894608"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 block mb-1">Location</label>
              <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <input
                  type="text"
                  name="location"
                  placeholder="Delhi, India"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1">Password</label>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <Lock className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-red-600 transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1">Confirm Password</label>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <Lock className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                required
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition mt-2"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-2">
            Already have an account?{' '}
            <a href="/login" className="text-red-600 font-bold hover:underline">
              Login
            </a>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Signup