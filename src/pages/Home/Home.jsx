import React from 'react'
import Sidebar from '../../component/Sidebar/Sidebar'
import Feed from '../../component/Feed/Feed'

const Home = ({sidebar}) => {
  return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
    <Sidebar sidebar={sidebar}/>
           <div className={`flex-1 overflow-y-auto feed-scroll ${sidebar ? "container" : "large-container"}`}>
    <Feed/>
    </div>
    </div>
  )
}

export default Home