import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Edit3, Save, Lock, Eye, EyeOff, LogOut } from 'lucide-react'

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
  })

  const [profileData, setProfileData] = useState({
    name: 'RAJ YADAV',
    email: 'rajyadav12556@gmail.com',
    phone: '8512894608',
    location: 'Delhi, India',
    bio: 'Building clean and functional web applications.',
  })

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    setProfileData((prev) => ({
      ...prev,
      name: signupData.name || prev.name,
      email: signupData.email || prev.email,
      phone: signupData.phone || prev.phone,
      location: signupData.location || prev.location,
    }))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsEditing(false)
    setAuthMode('login')
  }

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  if (!isLoggedIn) {
    return (
      <div
        id="Auth-Container"
        className="min-h-[85vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black">
              {authMode === 'login' ? 'Welcome ' : 'Create '}
              <span className="text-red-600">{authMode === 'login' ? 'Back' : 'Account'}</span>
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {authMode === 'login'
                ? 'Log in to view and manage your profile.'
                : 'Sign up to create your account.'}
            </p>
          </div>

          {authMode === 'login' ? (
            <form
              onSubmit={handleLoginSubmit}
              className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg space-y-5"
            >
              <div>
                <label className="text-sm text-gray-500 block mb-1">Email Address</label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="rajyadav12556@gmail.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
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
                    required
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition mt-2"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-2">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="text-red-600 font-bold hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          ) : (
            <form
              onSubmit={handleSignupSubmit}
              className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg space-y-5"
            >
              <div>
                <label className="text-sm text-gray-500 block mb-1">Full Name</label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                  <User className="w-5 h-5 text-red-600 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="Raj Yadav"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
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
                    required
                    placeholder="rajyadav12556@gmail.com"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
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
                      required
                      placeholder="8512894608"
                      value={signupData.phone}
                      onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
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
                      placeholder="Delhi, India"
                      value={signupData.location}
                      onChange={(e) => setSignupData({ ...signupData, location: e.target.value })}
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
                    required
                    placeholder="Create a password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
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
                    required
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
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
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-red-600 font-bold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          )}
        </div>
      </div>

    )
  }

  return (
    <div
      id="Profile-Container"
      className="min-h-[80vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black">
            My <span className="text-red-600">Profile</span>
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Manage your personal information and account security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg flex flex-col items-center text-center h-fit">
            <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-red-600 flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-red-600" />
            </div>

            <h2 className="text-2xl font-black">
              {profileData.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {profileData.location}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              {profileData.bio}
            </p>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-6 w-full py-2.5 rounded-lg border border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </button>

            <button
              onClick={handleLogout}
              className="mt-3 w-full py-2.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 font-bold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="md:col-span-2 space-y-8">
            <form
              onSubmit={handleSaveProfile}
              className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black">
                  Personal <span className="text-red-600">Details</span>
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      disabled={!isEditing}
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 disabled:opacity-70"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Email</label>
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                      <Mail className="w-4 h-4 text-red-600 shrink-0" />
                      <input
                        type="email"
                        name="email"
                        disabled={!isEditing}
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="w-full bg-transparent outline-none disabled:opacity-70"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500 block mb-1">Phone</label>
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                      <Phone className="w-4 h-4 text-red-600 shrink-0" />
                      <input
                        type="text"
                        name="phone"
                        disabled={!isEditing}
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        className="w-full bg-transparent outline-none disabled:opacity-70"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-1">Location</label>
                  <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <input
                      type="text"
                      name="location"
                      disabled={!isEditing}
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="w-full bg-transparent outline-none disabled:opacity-70"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-1">Bio</label>
                  <textarea
                    rows="3"
                    name="bio"
                    disabled={!isEditing}
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 resize-none disabled:opacity-70"
                  ></textarea>
                </div>

                {isEditing && (
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                )}
              </div>
            </form>

            <form
              onSubmit={handleUpdatePassword}
              className="rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                <Lock className="text-red-600 w-5 h-5" />
                <h2 className="text-2xl font-black">
                  Change Password
                </h2>
              </div>

              <div className="space-y-4">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full p-3 rounded-lg outline-none border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-red-600 text-white font-black hover:bg-red-700 transition"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile