import React,{useReducer} from 'react'
import SessionReducer from './SessionReducer'
import SessionContext from './SessionContext'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies=new Cookies();

function SessionState(props) {
  
    const _initialState = {
        isAuthenticated: false,
        user: {},
        token: '',
        error: '',
        loading: false
    };

    const [state, dispatch] =useReducer(SessionReducer, _initialState);

    const isLogin = () => {
        const token=cookies.get('sessionStateToken')
        const rol=cookies.get('sessionStateRol')

        if(token && rol){ 
            dispatch({
                type: 'AUTHENTICATE',
                payload: {
                    token,
                    rol
                }
            })
        }
    };

    const login=async()=>{
        const _userSession = await axios.post('http://54.152.168.242:3333/api/v1/post/auth',{
            "typeCout": "administrador",
            "cedula": "1208593854",
            "password": "12345"
        })
        
        if(_userSession.status===200){
            dispatch({
                type: 'LOGIN',
                payload: _userSession.data
            })
        }
    }
    


    return (
        <SessionContext.Provider value={{state,login}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionState