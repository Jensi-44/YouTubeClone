// src/components/History.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../component/Sidebar/Sidebar'

// Thumbnail assets
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'

const History = ({ sidebar }) => {
  return (
    <div className="flex h-screen bg-[white] text-black mt-7">
      
   
      <Sidebar sidebar={sidebar} />

   
      <div className="flex-1 overflow-y-auto p-6 mt-5">
        
        <h1 className="text-2xl font-bold mb-4">Watch history</h1>
        <p className="text-lg font-semibold mb-6">Today</p>

   
        <Link
          to="/video/1/deploy-react-netlify"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail3} alt="Deploy React App" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Deploy React Application using Netlify | Deploy manually...
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">Code With Arjun</h3>
            <p className="text-gray-500 text-xs mt-1">168K views • 1 day ago</p>
          </div>
        </Link>

      
        <Link
          to="/video/2/tmkoc-jethalal"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail1} alt="Jethalal Meme" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Ab sb log mujhe dekh rhe hai 🥲😂 #tmkoc #jethalal
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">Giggle Factory</h3>
            <p className="text-gray-500 text-xs mt-1">1.7M views • 3 days ago</p>
          </div>
        </Link>

    
        <Link
          to="/video/3/youtube-clone"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail2} alt="YouTube Clone Tutorial" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Create YouTube Clone Using React JS | Build Complete Project
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">GreatStack</h3>
            <p className="text-gray-500 text-xs mt-1">228K views • 2 weeks ago</p>
          </div>
        </Link>
         <Link
          to="/video/3/youtube-clone"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail3} alt="YouTube Clone Tutorial" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Create YouTube Clone Using React JS | Build Complete Project
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">GreatStack</h3>
            <p className="text-gray-500 text-xs mt-1">228K views • 2 weeks ago</p>
          </div>
        </Link>
         <Link
          to="/video/3/youtube-clone"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail1} alt="YouTube Clone Tutorial" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Create YouTube Clone Using React JS | Build Complete Project
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">GreatStack</h3>
            <p className="text-gray-500 text-xs mt-1">228K views • 2 weeks ago</p>
          </div>
        </Link>
         <Link
          to="/video/3/youtube-clone"
          className="flex gap-4 max-w-4xl mb-6 hover:bg-[#1f1f1f] p-3 rounded-lg transition duration-300"
        >
          <img src={thumbnail2} alt="YouTube Clone Tutorial" className="w-64 h-36 object-cover rounded" />
          <div>
            <h2 className="text-gray-400 text-sm font-semibold">
              Create YouTube Clone Using React JS | Build Complete Project
            </h2>
            <h3 className="text-gray-400 text-xs mt-2">GreatStack</h3>
            <p className="text-gray-500 text-xs mt-1">228K views • 2 weeks ago</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default History
