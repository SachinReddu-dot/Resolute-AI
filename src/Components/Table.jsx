import React, { useEffect, useState } from 'react'
import { UseFirebase } from '../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const Table = () => {

    const firebase = UseFirebase()

    const [userData, setUserData] = useState([])

    const navigate = useNavigate()
  
    useEffect(()=>{
      firebase.getData().then((books)=> setUserData(books.docs.map((val)=> ({...val.data(), id: val.id}))))
    }, [])

  return (
    <div className='w-full relative bg-[#070C27] rounded-2xl px-2 py-5'>
        <div className='flex items-center gap-3 mb-3 bg-[#1A1F37] py-3 rounded-2xl'>
            <h1 className='w-14 text-center'>ID</h1>
            <h1 className='w-40'>Title</h1>
            <h1 className='w-60'>Description</h1>
            <h1 className='w-28'>Priority</h1>
            <h1 className='w-28'>Status</h1>
            <h1 className='w-28'>Created By</h1>
            <h1 className='w-28'>Assigned To</h1>
            <h1 className='w-40'>Action</h1>
        </div>

        {userData.map((value, idx)=>(
            <div key={value.id}>
                <div className='flex items-center gap-3'>
                    <h1 className='w-14 text-center'>{idx+1}</h1>
                    <h1 className='w-40'>{value.data.name}</h1>
                    <h1 className='w-60'>{value.data.description}</h1>
                    <h1 className='w-28'>{value.data.priority}</h1>
                    <h1 className='w-28'>{value.data.status}</h1>
                    <h1 className='w-28'>{value.data.ceratedBy}</h1>
                    <h1 className='w-28'>{value.data.assigendTo}</h1>
                    <div className='w-40 flex items-center gap-3 text-2xl'>
                        <i className="ri-delete-bin-7-fill hover:text-red-700"></i>
                        <i onClick={()=> navigate(`/users/${value.id}`)} className="ri-edit-fill hover:text-blue-700"></i>
                        <i className="ri-eye-fill"></i>
                    </div>
                    </div> 
                <div className='w-full h-[1px] bg-zinc-400 mt-1'></div>
            </div>
        ))}
        
    </div>
  )
}

export default Table