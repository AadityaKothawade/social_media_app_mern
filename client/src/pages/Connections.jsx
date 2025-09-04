import React ,{useState} from 'react'
import {Users,UserPlus,UserCheck,UserRoundPen,MessageSquare} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections
} from '../assets/assets'


function Connections() {

  const [currentTab,setCurrentTab] = useState('Followers');

  const navigate = useNavigate();
  const dataArray = [
    {label:'Followers',value:followers,icon:Users},
    {label:'Following',value:following,icon:UserCheck},
    {label:'Pending',value:pendingConnections,icon:UserRoundPen},
    {label:'Connections',value:connections,icon:UserPlus},
  ]

  return (
    <div className='min-h-screen  bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Title */}
         <div className='mb-8'>
           <h1 className='text-3xl font-bold text-slate-900 mb-2'>Connections</h1>
           <p className='text-slate-600'> Manage Your network and Find new connections  </p>
         </div>

        {/* Count */}
        <div className='flex flex-wrap  gap-6 mb-8'>
           {dataArray.map((item,index)=>(
            <div key={index} className='bg-white shadow rounded-md p-4 flex flex-col items-center  min-w-[150px] max-w-smxs cursor-pointer hover:shadow-md transition' >
                <b>{item.value.length}</b>
                <p className='text-slate-600'>{item.label}</p>
            </div>
           ))}
        </div>

        {/* Tabs */}
        <div className='inline-flex flex-wrap items-center border border-gray-200 rounded-md p-1 bg-white shadow-sm '>
           {
            dataArray.map((tab)=>(
              <button onClick={()=>setCurrentTab(tab.label)} key={tab.label} className={`flex items-center cursor-pointer px-3 py-1 text-sm rounded-md transition-colors ${currentTab===tab.label ? 'bg-indigo-600 text-white shadow' : 'text-slate-600 hover:bg-gray-100' }`} >
                  <tab.icon className='w-4 h-4 mr-2'/>
                  <span className='ml-1'>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className='ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full '>{tab.count}</span>
                  )}
              </button>
            ))
           }
        </div>

        {/* Connections */}
        <div className='flex flex-wrap gap-6 mt-6'>
            {dataArray.find((item)=>item.label === currentTab).value.map((user)=>(
              <div key={user._id} className='w-full max-w-88 flex gap-5 p-6 bg-white shadow rounded-md'>
                  <img src={user.profile_picture} alt="" className='rounded-full w-12 h-12 shadow-md mx-auto ' />
                  <div className='flex-1'>
                    <p className='font-medium text-slate-700'>{user.full_name}</p>
                    <p className=' text-slate-500'>@{user.username}</p>
                    <p className='text-sm text-slate-600'>@{user.bio.slice(0,30)}...</p>
                    <div className='flex max-sm:flex-col gap-2 mt-4 '>
                      {
                        <button onClick={()=>navigate(`/profile/${user._id}`)} className='w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition flex items-center justify-center gap-2 cursor-pointer'>
                          View Profile 
                        </button>
                      }
                      {
                        currentTab === 'Following' && (
                          <button className='w-full p-2  py-2 text-sm rounded bg-slate-500 hover:bg-slate-800 text-white active:scale-95 transition cursor-pointer'>
                            Unfollow
                          </button>
                        )
                      }
                       {
                        currentTab === 'Pending' && (
                          <button className='w-full p-2  py-2 text-sm rounded bg-slate-700 hover:bg-slate-800 text-white active:scale-95 transition cursor-pointer'>
                            Accept
                          </button>
                        )
                      }
                       {
                        currentTab === 'Connections' && (
                          <button onClick={()=>navigate(`/messages/${user._id}`)} className='w-full p-2  py-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1'>
                            <MessageSquare className='w-4 h-4 '/> Message
                          </button>
                        )
                      }
                    </div>
                  </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Connections
