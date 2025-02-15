import React, { useEffect } from 'react'
import Login from './Pages/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SupportAgent from './Pages/SupportAgent'
import Form from './Components/Form'
import { UseFirebase } from './Context/FirebaseContext'

const App = () => {

  const firebase = UseFirebase()
  const navigate = useNavigate()

 useEffect(()=>{
  if(!firebase.isLoggeIn){
    navigate('/')
  }
 })

  return (
    <>
    <div className='w-full relative'>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/admin' element={<SupportAgent />}/>
          <Route path='/user/form' element={<Form />}/>
          <Route path='/users/:userId' element=''/>
        </Routes>
    </div>
    </>
  )
}

export default App