import React from 'react'
import Footer from '../../atoms/footer/Footer'
import VisionCurso from '../../organisms/visionCurso/VisionCurso'
import './style.css'

function TeacherDashboard() {
  return (
    <div className="contenedor">
        <VisionCurso/>
        <Footer/>
    </div>
  )
}

export default TeacherDashboard