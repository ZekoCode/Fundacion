import React,{useContext,useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import VisionCurso from './components/organisms/visionCurso/VisionCurso'

import LoginSection from './components/pages/loginSection/LoginSection'
import StudentsList from './components/pages/studentsList/StudentsList'

import SessionContext from './context/session/SessionContext'

function App() {

  const {isLogin,state}=useContext(SessionContext)
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'/>
           <Route path='/login' element={<LoginSection/>}/>
           <Route path='/curso' element={<VisionCurso/>}/>
           <Route path='/profesor/:id' render={()=>{
             return state.token? <StudentsList/>:<Navigate to="login"/>
           }}/>
        </Routes>
    </BrowserRouter> 
  )
}

export default App