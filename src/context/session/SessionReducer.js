import {login} from '../types'

const SessionReducer= (state, action)=>{
    const {payload, type}=action

    switch (type) {                 
        case login:
            return{
                ...state,
                user: payload.infoUser,
                token:payload.accessToken,
                isAuthenticated:true,
            }
    
        default:
            return state
    }
}

export default SessionReducer
