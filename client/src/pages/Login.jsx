import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'


function Login() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* {Background Image } */}
      <img src={assets.bgImage} alt="" className='absolute top-0 left-0 -z-1 w-full h-full object-cover' />

      {/* left Side : */}
      <div className='flex flex-col md:w-1/2 items-start justify-between p-6 md:p-10 lg:pl-40 '>
            <img src={assets.logo} alt="" className='h-12 object-contain' />
            <div>
                <div className='flex items-center gap-3 mb-4 max-wd:mt-10'>
                    <img src={assets.group_users} alt="" className='h-8 md:h-10' />
                    <div>
                        <div className='flex'>
                            {Array(5).fill(0).map((_,i)=>(<Star key={i}
                             className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
                        </div>
                        <p>Used by 12k+ developers</p>
                    </div>
                </div>
                <h1 className='text-3xl md:text-4xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'> 
                    Connect with People. Share your Journey. Grow Together.
                </h1>
                <p className='text-lg md:text-xl text-gray-700 mt-4 mb-6'>A social media app that goes beyond the surface. 
                    Connect authentically, share your journey, and grow together with a community that values real connections and meaningful interactions.
                </p>
            </div>
            <span className='md:h-10 '></span>
      </div>
      {/* Right Side : */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
            <SignIn/>
      </div>
    </div>
  )
}

export default Login
