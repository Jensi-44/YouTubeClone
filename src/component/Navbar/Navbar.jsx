import React, { useState, useEffect, useRef } from 'react'
import menu_icon from '../../assets/menu.png'
import search_icon from '../../assets/search.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import image from '../../assets/image.png'

const Navbar = ({ setSidebar }) => {
  const [showProfile, setShowProfile] = useState(false)
  const menuRef = useRef()

  const handleClick = () => {
    setShowProfile(!showProfile)
  }

  // ✅ Close dropdown if clicking outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowProfile(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <img
          src={menu_icon}
          alt="menu"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="w-6 cursor-pointer hover:opacity-70 transition"
        />
        <img
          src={image}
          alt="logo"
          className="w-24 cursor-pointer hover:opacity-80 transition"
        />
      </div>

      {/* Middle (Search Bar) */}
      <div className="hidden sm:flex items-center space-x-2 w-auto">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-56 sm:w-72 md:w-96 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-500"
          />
          <img
            src={search_icon}
            alt="search"
            className="w-5 cursor-pointer opacity-70 hover:opacity-100"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 relative" ref={menuRef}>
        <img
          src={notification_icon}
          alt="notifications"
          className="w-6 cursor-pointer hover:scale-110 transition-transform"
        />
        <img
          src={profile_icon}
          alt="profile"
          onClick={handleClick}
          className="w-8 h-8 rounded-full cursor-pointer border border-gray-200 hover:border-blue-500 transition"
        />

        {/* Profile Dropdown */}
        {showProfile && (
          <div className="bg-white absolute right-0 top-12 w-80  text-black rounded-xl shadow-lg overflow-hidden">
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <img src={profile_icon} className="w-8 h-8 rounded-full cursor-pointer border border-gray-200 hover:border-blue-500 transition"/>
                <div>
                  <p className="font-semibold">XYZ</p>
                  <p className="text-sm text-gray-400">@abcd3658</p>
                  <a href="#" className="text-blue-400 text-sm">
                    View your channel
                  </a>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col py-2 text-sm">
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Google Account
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Switch account
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Sign out
              </li>

              <hr className="border-gray-700 my-2" />

              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                YouTube Studio
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Purchases and memberships
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Your data in YouTube
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Appearance: Device theme
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Language: English
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Restricted Mode: Off
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Location: India
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Keyboard shortcuts
              </li>

              <hr className="border-gray-700 my-2" />

              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                Help
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
