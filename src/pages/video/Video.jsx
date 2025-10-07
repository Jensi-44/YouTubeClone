import React from 'react'
import PlayVideo from '../../component/PlayVideo/PlayVideo'
import Recommended from '../../component/Recommended/Recommended'

const Video = () => {
  return (
    <div className="bg-white flex justify-center bg-gray-100 py-6 min-h-screen">
        <PlayVideo/>
        <Recommended/>
    </div>
  )
}

export default Video