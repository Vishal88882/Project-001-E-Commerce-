import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Edit3, Save, Lock } from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)

  // Dummy state for frontend (isko aap apne backend API se connect kar sakte hain)
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

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value })
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Yahan backend API call lagayein
    console.log('Saved Data:', profileData)
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    // Yahan password update API call lagayein
    console.log('Password Data:', passwords)
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  return (
    <div
      id="Profile-Container"
      className="min-h-[80vh] w-full flex justify-center items-center px-5 py-10 text-black dark:text-white"
    >
      <div className="w-full max-w-4xl">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black">
            My <span className="text-red-600">Profile</span>
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Manage your personal information and account security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Card: Basic Overview */}
          <div className="md:col-span-1 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-lg flex flex-col items-center text-center h-fit">
            
            {/* Simple Initials Avatar (No Flashy Graphics) */}
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
          </div>

          {/* Right Column: Details Form & Security */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Personal Details Card */}
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
                      onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                      onChange={handleChange}
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
                    onChange={handleChange}
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

            {/* Change Password Card */}
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