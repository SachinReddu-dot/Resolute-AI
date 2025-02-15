import React, { useState } from 'react'
import { UseFirebase } from '../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const firebase = UseFirebase()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [ceratedBy, setCeratedBy] = useState('')
    const [assigendTo, setAssigendTo] = useState('')
    const [category, setCategory] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = async(e)=>{
        e.preventDefault()
    
        const data = {name, title, description, priority, status, assigendTo, ceratedBy,category, phone, email}
        await firebase.storeData(data)
        navigate('/admin')

        setName('')
        setAssigendTo('')
        setDescription('')
        setPriority('')
        setStatus('')
        setCeratedBy('')
        setCategory('')
        setPhone('')
        setEmail('')
    }


  return (
    <div className='w-full h-screen relative flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-semibold mb-4'>Fill the Details</h1>
        <form onSubmit={handleLogin} className='w-2/3 py-5 bg-zinc-900 rounded-xl flex overflow-hidden font-medium'>
            <div className='w-1/2 h-full flex flex-col gap-3 items-center p-5'>
                <input required onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Title' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <textarea required onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Decsription' className='bg-zinc-700 h-28 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setPriority(e.target.value)} value={priority} placeholder='Priority' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setStatus(e.target.value)} value={status} placeholder='Status' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
            </div>

            <div className='w-1/2 h-full flex flex-col items-center gap-3 p-5'>
                <input required onChange={(e)=>setCeratedBy(e.target.value)} value={ceratedBy} placeholder='Created By' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setAssigendTo(e.target.value)} value={assigendTo} placeholder='Assigned To' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setCategory(e.target.value)} value={category} placeholder='Category' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder='Phone No.' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <input required onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' className='bg-zinc-700 w-full p-3 outline-none rounded-lg' type="text" />
                <button className='bg-blue-700 rounded-lg w-full py-3'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form