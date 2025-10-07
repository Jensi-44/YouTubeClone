import React from 'react'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'


const Sidebar = ({sidebar}) => {
  return (
    <div className={`bg-white h-screen shadow-md transition-all duration-300 ${sidebar?"w-50":"w-15"}`}>
        <div className="flex flex-col mt-13 space-y-3">
            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={home} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Home</p>}
            </div>
             <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={game_icon} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Gaming</p>}
            </div>
             <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={automobiles} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Automobile</p>}
            </div>
             <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={sports} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Sports</p>}
            </div>
             <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={entertainment} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Entertainment</p>}
            </div>
             <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={tech} alt="" className="w-6 h-6"/>
                {sidebar && <p className='text-gray-800 font-medium'>Technology</p>}
            </div>
         
        </div>

        {/* New "You" Section (online icons) */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          {sidebar && <p className="text-gray-500 text-sm px-4 mb-2 font-semibold">You</p>}
          
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png" alt="History" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">History</p>}
            </div>

            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/860/860790.png" alt="Playlists" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">Playlists</p>}
            </div>

            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt="Your videos" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">Your Videos</p>}
            </div>

            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25645.png" alt="Watch later" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">Watch Later</p>}
            </div>

            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Liked videos" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">Liked Videos</p>}
            </div>

            <div className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="Downloads" className="w-5 h-5"/>
              {sidebar && <p className="text-gray-800 font-medium">Downloads</p>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
