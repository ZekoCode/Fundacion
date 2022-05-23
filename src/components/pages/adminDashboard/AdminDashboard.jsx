import React from 'react'
import Footer from '../../atoms/footer/Footer'
import AdminPanel from '../../organisms/visionAdminPanel/AdminPanel'
import './style.css'

function AdminDashboard() {


  return (
    <div className="contenedor-bashboardAdmin">
        <AdminPanel/>
        <Footer/>
    </div>
  )
}

export default AdminDashboard