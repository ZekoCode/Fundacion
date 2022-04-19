import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginSections from './components/organisms/loginSections/LoginSections'
import VisionCurso from './components/pages/VisionCurso'

function App() {
  return (
 
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginSections/>}/>
            <Route path='/curso' element={<VisionCurso/>}/>          
        </Routes>
    </BrowserRouter>

  )
}

export default App