import React, { useEffect, useState } from 'react'
import { UseFirebase } from '../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const firebase = UseFirebase()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        firebase.loginUser(email, password)

        setEmail('')
        setPassword('')
    }

    useEffect(()=>{
      if(firebase.isLoggeIn) {
        navigate('/admin')
      }
    }, [firebase, navigate])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold mb-3'>Login</h1>
        <form onSubmit={handleLogin} className='w-1/3 font-medium rounded-xl py-16 bg-zinc-900 gap-3 px-10 flex flex-col items-center justify-center'>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Email' type="email" required/>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='bg-zinc-700 w-full rounded-lg p-3 outline-none' placeholder='Password' type="password" required/>
            <button className='bg-blue-700 w-1/2 mt-3 rounded-lg p-2 text-lg'>Login</button>
        </form>
    </div>
  )
}

export default Login