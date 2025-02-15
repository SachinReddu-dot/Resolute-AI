import React from 'react'
import Sidebar from '../Components/Sidebar'
import image1 from '../assets/bg.jpg'
import Center from '../Components/Center'

const SupportAgent = () => {

  return (
    <>
      <div className='w-full font-medium font-sans'>
        <img className='w-full h-screen fixed object-cover object-center -z-10 rotate-180' src={image1} alt="" />
        <div className='w-full h-screen p-3'>
          <div className='w-full h-full backdrop-blur-md rounded-2xl overflow-auto flex'>
            <Sidebar />
            <Center />
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportAgent