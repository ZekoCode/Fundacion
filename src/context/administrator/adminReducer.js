import {refreshAdminState,setCurrentAction,saveReguisters} from '../types'

const AdministradorReducer = (state, action) => {
    const { payload, type } = action;
    
    switch (type) {
        case refreshAdminState:
        return {
            ...state,
            view: payload.view,
            data: payload.data,
        };

        case setCurrentAction:
            // console.log(payload)
        return {
            ...state,
            currentAction:payload
        };

        case saveReguisters:    
        return {
            ...state,
            data: payload,
        };
    
        default:
        return state;
    }
}

export default AdministradorReducer