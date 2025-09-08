import React from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Eye, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Messages() {

  const {connections} = useSelector((state)=>state.connections)
  const navigate = useNavigate();

  return (
    <div className='min-h-screen relative bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
          {/* Title  */}
         <div className='mb-8'>
           <h1 className='text-3xl font-bold text-slate-900 mb-2'>Messages</h1>
           <p className='text-slate-600'>Talk to your friends and family </p>
         </div>
         {/* Connected User  */}
         <div className='flex flex-col gap-3'>
            {connections.map((user)=>(
              <div key={user._id} className='max-w-xl flex   justify-between gap-5 p-6 bg-white shadow rounded-md '>
                  <img src={user.profile_picture} alt="" className='rounded-full size-12 mx-auto' />
                  <div className='flex-1'>
                    <p className='font-medium text-slate-700'>{user.full_name}</p>
                    <p className='text-slate-500'>@{user.username}</p>
                    <p className='text-sm text-gray-700'>{user.bio}</p>
                  </div>

                  <div className='flex flex-col gap-2 mt-4'>

                    <button onClick={()=>navigate(`/messages/${user._id}`)} className='px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition'>
                      <MessageSquare className='w-4 h-4'/>
                    </button>

                    <button onClick={()=>navigate(`/profile/${user._id}`)} className=' px-4 py-2 bg-gray-200 text-slate-700 rounded-md shadow hover:bg-gray-300 transition'>
                      <Eye className='w-4 h-4'/>
                    </button>

                  </div>

              </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default Messages
