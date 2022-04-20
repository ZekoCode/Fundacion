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
            return true
        }else{
            return false
        }
    };

    const setCookisSession=(data)=>{
        cookies.set('sessionStateRol',data.infoUser.rol,{path:'/'})
        cookies.set('sessionStateToken',data.accessToken,{path:'/'})
    }

    const logout = () => {
        cookies.remove('sessionStateRol',{path:'/'})
        cookies.remove('sessionStateToken',{path:'/'})
        dispatch({
            type: 'LOGOUT',
            payload: _initialState
        })
    }

    const login=async()=>{
        
        // let credentials={
        //     "typeCout": "administrador",
        //     "cedula": "1208593854",
        //     "password": "12345"
        // }

        const _userSession = await axios.post('http://54.152.168.242:3333/api/v1/post/auth',{
            "typeCout": "administrador",
            "cedula": "1208593854",
            "password": "12345"
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: 'ERROR',
                payload: 'Login session: Credentials invalid'
            })
        })
        
        if(_userSession && _userSession.status===200){
            console.log(_userSession.data)
            dispatch({
                type: 'LOGIN',
                payload: _userSession.data
            })
            setCookisSession(_userSession.data)
        }else{
            //redirec to login
        }
    }
     

    return (
        <SessionContext.Provider value={{state,login,isLogin,logout}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionState