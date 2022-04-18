import React,{useReducer} from 'react'
import SessionReducer from './SessionReducer'
import SessionContext from './SessionContext'
import axios from 'axios';

function SessionState(props) {
  
    const _initialState = {
        isAuthenticated: false,
        user: {},
        token: '',
        error: '',
        loading: false
    };

    const [state, dispatch] =useReducer(SessionReducer, _initialState);


    const login=async()=>{
        const _userSession = await axios.post('http://54.152.168.242:3333/api/v1/post/auth',{
            "typeCout": "administrador",
            "cedula": "1208593854",
            "password": "12345"
        })
        console.log(_userSession)
        dispatch()
    }
    


    return (
        <SessionContext.Provider value={{state,login}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionState