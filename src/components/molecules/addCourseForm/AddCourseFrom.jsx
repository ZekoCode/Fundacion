import React,{useEffect,useContext} from 'react'
import './style.css'
import AdministradorContext from '../../../context/administrator/adminContext'

function AddCourseFrom() {
  const {searchData}=useContext(AdministradorContext)

    useEffect(() => {
        searchData()  
    }, [])

  return (
    <form>
    <div className='field'>
        <label>Grado</label>
        <input name='nombre' type='name'  />
    </div>
    <div className='field'>
        <label>Paralelo</label>
        <input name='texto' type='text'  />
    </div>
    
    <button className='submit'>Guardar</button>
    
</form>
  )
}

export default AddCourseFrom