import React,{useReducer} from 'react'
import ProfesorReducer from './ProfesorReducer';
import ProfesorContext from './ProfesorContext';
import axios from 'axios';
import {host} from '../types'

function ProfesorState(props) {
  
    const _initialState = {
       listStudents:[]
    };

    const [state, dispatch] =useReducer(ProfesorReducer, _initialState);

    const getCalificaciones = async (credentials) => {
        // console.log(credentials)
        const {token,rol,cedula}=credentials
        await axios.get(`http://${host}/api/v1/get/calificaciones`,{
            headers:{
                'authorization':token,
                'typeuser':rol,
                'cedula':cedula
            }
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.error("Server not found:"+error)
        })
        
    }

    return (
        <ProfesorContext.Provider value={{getCalificaciones, state}}>
            {props.children}
        </ProfesorContext.Provider>
    )
}

export default ProfesorState