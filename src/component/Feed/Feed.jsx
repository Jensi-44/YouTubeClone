import React from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='feed grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10'>
    <Link to={`video/20/4521`} className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail1} alt=""  />
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`}  className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail2} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`} className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail3} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`}  className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail4} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
   <Link to={`video/20/4521`}  className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail5} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`} className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail6} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`} className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail7} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
   <Link to={`video/20/4521`}  className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail8} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    <Link to={`video/20/4521`} className='card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300'>
        <img src={thumbnail1} alt=""/>
    <div className="p-3">
        <h2 className='text-sm font-semibold mb-1 ml-1 mt-1'>Best Channel to learn coding that you to be web developer</h2>
        <h3 className='text-black-600 ml-1 text-xs mt-2 '>GreatStack</h3>
        <p className='text-gray-500 text-xs ml-1 mt-2'>15k views &bull; 2 days ago</p>
    </div>
    </Link>
    </div>
  )
}

export default Feed