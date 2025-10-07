import React from 'react'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
  <div className="p-4  bg-white rounded-xl w-full max-w-3xl mt-10">
  <video
    src={video1}
    controls
    autoPlay
    muted
    className="w-full rounded-lg mb-4 shadow-md"
  ></video>

  <h3 className="text-lg font-semibold mb-2 text-gray-900">
    Best Yogurt Recipe for Beginners
  </h3>

  <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
    <p>1525 Views • 2 days ago</p>
    <div className="flex gap-3">
      <span className="flex items-center gap-1">
        <img src={like} alt="like" className="w-5" /> 125
      </span>
      <span className="flex items-center gap-1">
        <img src={dislike} alt="dislike" className="w-5" /> 10
      </span>
      <span className="flex items-center gap-1">
        <img src={share} alt="share" className="w-5" /> Share
      </span>
      <span className="flex items-center gap-1">
        <img src={save} alt="save" className="w-5" /> Save
      </span>
    </div>
  </div>

  <hr className="border-gray-200 my-4" />

  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <img src={jack} alt="channel" className="w-12 h-12 rounded-full" />
      <div>
        <p className="font-semibold text-gray-800">GreatStack</p>
        <span className="text-gray-500 text-sm">1M Subscribers</span>
      </div>
    </div>
    <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700 transition">
      Subscribe
    </button>
  </div>

  <div className="text-gray-700 mb-6">
    <p>Channel that makes learning easy</p>
    <p>Subscribe to GreatStack to watch more tutorials on Web Development.</p>
  </div>

  <hr className="border-gray-200 my-4" />

  <h4 className="font-semibold mb-4 text-gray-800">130 Comments</h4>

  {Array(6)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="flex gap-3 mb-4">
        <img src={user_profile} alt="user" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Jack Nicholson{" "}
            <span className="text-gray-500 font-normal">• 1 day ago</span>
          </h3>
          <p className="text-gray-700 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            officiis iste, ipsa mollitia optio nesciunt numquam cum
            repudiandae libero ad.
          </p>
          <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
            <img src={like} alt="like" className="w-4" />
            <span>244</span>
            <img src={dislike} alt="dislike" className="w-4" />
          </div>
        </div>
      </div>
    ))}
</div>

  )
}

export default PlayVideo
