import React from 'react'
import PlayVideo from '../../component/PlayVideo/PlayVideo'
import Recommended from '../../component/Recommended/Recommended'

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-6 bg-white-50 min-h-screen" >
        <PlayVideo/>
        <Recommended/>
    </div>
  )
}

export default Video