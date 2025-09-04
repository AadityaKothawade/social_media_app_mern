import React ,{useEffect, useState}from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'


function Feed() {
  const [feeds,setFeeds] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchFeeds = async()=>{
    setFeeds(dummyPostsData)
    setLoading(false)
  }
  useEffect(()=>{
    fetchFeeds()
  },[])
  
  return !loading ?  (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap:8'>
      {/* stories and post list  */}
      <div>
        <StoriesBar/>
        <div className='p-4 space-y-6 '>
         {feeds.map((post,index)=>(
            <PostCard key={post._id} post={post}/>
         ))}
        </div>
      </div>

      {/* Right SideBar */}
      <div className='hidden lg:inline-flex lg:flex-col w-60 xl:w-80 h-fit sticky top-0 self-start pt-4 px-2 border-l border-gray-300 space-y-1'>
       <div className='space-y-1'>
        <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
        <img src={assets.sponsored_img} className='w-75 h-60 rounded-md ' alt="" />
        <p className='text-slate-600'>Email Marketing</p>
        <p className='text-slate-400 text-sm'>SuperCharge your Marketing with a powerful 
        tool,easy to use platform built for results </p>
       </div>
       <RecentMessages/>
      </div>
    </div>
  ) : (
    <Loading/>
  )
}

export default Feed
