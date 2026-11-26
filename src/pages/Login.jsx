import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login Data:', formData)
  }

  return (
    <div
      id="Login-Container"
      className="min-h-[85vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black">
            Welcome <span className="text-red-600">Back</span>
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Log in to your account to continue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg space-y-5"
        >
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

          <div>
            <label className="text-sm text-gray-500 block mb-1">Password</label>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
              <Lock className="w-5 h-5 text-red-600 shrink-0" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                placeholder="Enter your password"
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="accent-red-600 w-4 h-4 rounded"
              />
              Remember me
            </label>

            <a href="/forgot-password" className="text-red-600 font-bold hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition mt-2"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-2">
            Don't have an account?{' '}
            <a href="/signup" className="text-red-600 font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login