import {login} from '../types'

const ProfesorReducer= (state, action)=>{
    const {payload, type}=action

    switch (type) {    
        // case authenticate:
        //     return {
        //         ...state,
        //         isAuthenticated: true,
        //         token:payload.token,
        //         user:{
        //             rol:payload.rol
        //         }
        //     }    
    
        default:
            return state
    }
}

export default ProfesorReducer
