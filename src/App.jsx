import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginSections from './components/organisms/loginSections/LoginSections'

function App() {
  return (
 
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginSections/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App