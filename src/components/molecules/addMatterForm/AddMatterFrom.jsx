import React,{useContext,useEffect} from 'react'
import './style.css'
import AdministradorContext from '../../../context/administrator/adminContext'

function AddMatterFrom() {

  const {searchData}=useContext(AdministradorContext)

    useEffect(() => {
        searchData()  
    }, [])

  return (
    <form>
        <div className='field'>
            <label>Nombre de la materia</label>
            <input name='nombre' type='name' />
        </div>
        
        <button className='submit'>Guardar</button>
        
    </form>
  )
}

export default AddMatterFrom