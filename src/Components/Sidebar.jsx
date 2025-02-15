import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { UseFirebase } from '../Context/FirebaseContext'
import { Navigate, useNavigate } from 'react-router-dom'
import {firebaseAuth} from '../Context/FirebaseContext'
import { signOut } from 'firebase/auth'

const Sidebar = () => {

  const firebase = UseFirebase()
  const navigate = useNavigate()

  const logout = ()=>{
    signOut(firebaseAuth)
    navigate('/')
    firebase.setUser('')
  }

  return (
    <>
      <div className='bg-[#070C27] backdrop-blur-2xl rounded-2xl w-1/5 h-full flex flex-col items-center py-5 px-2'>
        <h1 className='text-3xl font-semibold'>Admin</h1>
        <div className='w-full h-[1px] bg-white my-3 rounded-full'></div>
        <div className='px-2 w-full mt-5'>
          <div className='bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-3'>
            <div className='bg-[#582CFF] rounded-full px-2 py-1'><i class="ri-home-2-fill"></i></div>
            <h1>Dashboard</h1>
          </div>
          <div className='hover:bg-[#1A1F37] w-full rounded-2xl flex items-center gap-3 p-3 mb-5'>
            <div className='hover:bg-[#582CFF] bg-[#1A1F37] rounded-full px-2 py-1 text-[#582CFF]'><i class="ri-ticket-fill"></i></div>
            <h1>Ticekts Page</h1>
          </div>
          <button onClick={logout} className='w-2/4 p-3 text-center bg-red-700 rounded-xl'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar