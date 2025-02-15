import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom'

const Center = () => {
  return (
    <div className='w-4/5 py-5 px-7 relative'>
        <div className='w-full text-center relative flex items-center gap-2 px-5 py-5'>
            <i class="ri-search-line text-xl text-zinc-200 absolute left-7"></i>
            <input className='w-1/4 border-2 rounded-2xl border-[#4E556D] outline-none py-2 px-9 bg-[#0F1535]' type="search" placeholder='Search'/>
        </div>
        <h1 className='text-4xl font-semibold'>General Staticstics</h1>
        <div className='w-full pt-5 flex gap-5 items-center'>
            <div className='w-1/4 bg-[#070C27]/80 gap-8 rounded-2xl py-4 flex items-center justify-center'>
              <div>
                <h1 className='text-md text-zinc-400 font-semibold'>Total Tickets</h1>
                <h3 className='text-2xl font-semibold text-center'>5</h3>
              </div>
              <i class="ri-ticket-fill text-2xl bg-[#582CFF] p-2 rounded-xl"></i>
            </div>

            <div className='w-1/4 bg-[#070C27]/80 gap-8 rounded-2xl py-4 flex items-center justify-center'>
              <div>
                <h1 className='text-md text-zinc-400 font-semibold'>Wallet</h1>
                <h3 className='text-2xl font-semibold text-center'>5,000</h3>
              </div>
              <i class="ri-wallet-2-fill text-2xl bg-[#582CFF] p-2 rounded-xl"></i>
            </div>

            <div className='w-1/4 bg-[#070C27]/80 gap-8 rounded-2xl py-4 flex items-center justify-center'>
              <div>
                <h1 className='text-md text-zinc-400 font-semibold'>Total Users</h1>
                <h3 className='text-2xl font-semibold text-center'>2,000</h3>
              </div>
              <i class="ri-global-line text-2xl bg-[#582CFF] p-2 rounded-xl"></i>
            </div>
            
        </div>
        <Link to='/user/form'><button className='bg-[#582CFF] mb-2 rounded-2xl px-20 py-3 text-lg mt-10'>Create Task</button></Link>
        <div className='w-full'>
            <Table />
        </div>
    </div>
  )
}

export default Center