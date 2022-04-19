import {login, logout,error, authenticate} from '../types'

const SessionReducer= (state, action)=>{
    const {payload, type}=action

    switch (type) {    
        case authenticate:
            return {
                ...state,
                isAuthenticated: true,
                token:payload.token,
                user:{
                    rol:payload.rol
                }
            }    
        case login:
            return{
                ...state,
                user: payload.infoUser,
                token:payload.accessToken,
                isAuthenticated:true,
            }
        case logout:
            return{
                ...payload
            }
        
        case error:
            return{
                ...state,
                error: payload
            }
    
        default:
            return state
    }
}

export default SessionReducer
