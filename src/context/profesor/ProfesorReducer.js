import {saveCalificaciones,saveCursosWithMatters,selectCurrentMatter} from '../types'

const ProfesorReducer= (state, action)=>{
    const {payload, type}=action

    switch (type) {    
        case saveCalificaciones:
            return {
                ...state,
               calificaciones:[...payload]
            }     

        case saveCursosWithMatters:
            return{
                ...state,
                cursosConMaterias:[...payload]
            }

        case selectCurrentMatter:
            return{
                ...state,
                currentCourse:{...payload}
            }
    
        default:
            return state
    }
}

export default ProfesorReducer
