import React,{useContext,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginSection from './components/pages/loginSection/LoginSection'
// import VisionCurso from './components/pages/VisionCurso'

import SessionContext from './context/session/SessionContext'

function App() {

  const {login}=useContext(SessionContext)

  useEffect(()=>{
    login()

  },[])

  return (
    <BrowserRouter>
        <Routes>
        <Route path='/'/>
           <Route path='/login' element={<LoginSection/>}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default App