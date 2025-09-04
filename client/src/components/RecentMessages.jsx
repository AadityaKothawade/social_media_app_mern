import React ,{useEffect, useState} from 'react'
import { dummyRecentMessagesData } from '../assets/assets'
import { Link } from 'react-router-dom'
import moment from 'moment'

function RecentMessages() {

    const [messages,setMessages] =useState([])

    const fetchRecentMessages = async()=>{
        // fetch recent messages from api
        setMessages(dummyRecentMessagesData)
    }

    useEffect(()=>{
        fetchRecentMessages()
    },[])

  return (
    <div className='bg-white max-w-xs mt-4 p-4 rounded-md shadow text-xs text-slate-800 '>
      <h3 className='font-semibold text-slate-8 mb-4 text-2xl '>Recent Messages</h3>
      <div className='flex flex-col max-h-56 overflow-y-scroll  no-scrollbar'>
        {
            messages.map((message,index)=>(
                <Link to={`/messages/${message.from_user_id._id}`} key={index} className='flex items-center gap-3 mb-4 last:mb-0 hover:bg-slate-100 p-2 rounded-md'>
                    <img src={message.from_user_id.profile_picture} alt="" className='w-10 h-10 rounded-full shadow'/>
                   <div className='w-full '>
                     <div className='flex justify-between '>
                        <p className='font-medium'>{message.from_user_id.full_name}</p>
                        <p className='text-[13px] text-slate-400'>{moment(message.createdAt).fromNow()}</p>
                    </div>
                    <div className='text-slate-600 justify-between flex  '>
                        <p className='text-gray-500'>{message.text ? message.text : 'media'}</p>
                        {!message.seen && <p className=' bg-blue-500 text-white  rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>1</p>}
                    </div>
                   </div>
                </Link>

            ))
        }
      </div>
    </div>
  )
}



export default RecentMessages
