import React from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recommended = () => {
  return (
    <div className="recommended space-y-4 bg-white p-4 rounded-xl  mt-10">
  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail1} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        Best Channel that help you to be a web developer
      </h4>
      <p className="text-gray-500 text-xs mt-1">GreatStack</p>
      <p className="text-gray-400 text-xs">199K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail2} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        Learn React JS from scratch step by step
      </h4>
      <p className="text-gray-500 text-xs mt-1">CodeWithHarry</p>
      <p className="text-gray-400 text-xs">320K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail3} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        Master JavaScript in 30 Days - Full Playlist
      </h4>
      <p className="text-gray-500 text-xs mt-1">FreeCodeCamp</p>
      <p className="text-gray-400 text-xs">870K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail4} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        How to Build YouTube Clone using React JS
      </h4>
      <p className="text-gray-500 text-xs mt-1">GreatStack</p>
      <p className="text-gray-400 text-xs">112K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail5} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        Tailwind CSS Crash Course for Beginners
      </h4>
      <p className="text-gray-500 text-xs mt-1">Traversy Media</p>
      <p className="text-gray-400 text-xs">215K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail6} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        Learn Node.js + Express Backend for Beginners
      </h4>
      <p className="text-gray-500 text-xs mt-1">Academind</p>
      <p className="text-gray-400 text-xs">500K Views</p>
    </div>
  </div>

  <div className="side-video-list flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
    <img src={thumbnail7} alt="" className="w-40 h-24 object-cover rounded-lg" />
    <div className="vid-info">
      <h4 className="text-sm font-semibold leading-snug text-gray-900">
        HTML & CSS Full Course for Beginners
      </h4>
      <p className="text-gray-500 text-xs mt-1">Programming Hero</p>
      <p className="text-gray-400 text-xs">660K Views</p>
    </div>
  </div>
</div>

  )
}

export default Recommended
