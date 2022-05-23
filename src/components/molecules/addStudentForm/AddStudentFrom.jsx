import React, { useContext } from 'react'
import { useEffect } from 'react'
import './style.css'
import AdministradorContext from '../../../context/administrator/adminContext'

function AddStudentFrom() {

    const {searchData}=useContext(AdministradorContext)

    useEffect(() => {
        searchData()  
    }, [])
  return (
    <form>
        <div className='field'>
            <label>Nombre</label>
            <input name='nombre' type='name'  />
        </div>
        <div className='field'>
            <label>Apellidos</label>
            <input name='apellidos' type='name'  />
        </div>

        <div className='field'>
            <label>Cedula</label>
            <input name='cedula' type='number'  />
        </div>

        <div className='field'>
            <label>Email</label>
            <input name='Email' type='email'  />
        </div>
        <div className='field'>
            <label>Direccion</label>
            <input name='Direccion' type='text'  />
        </div>
        <div className='field'>
            <label>Teléfono</label>
            <input name='Telefono' type='number'  />
        </div>

        <button className='submit'>Guardar</button>

    </form>
  )
}

export default AddStudentFrom