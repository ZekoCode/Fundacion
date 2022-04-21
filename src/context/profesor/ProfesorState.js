import React,{useReducer} from 'react'
import ProfesorReducer from './ProfesorReducer';
import ProfesorContext from './ProfesorContext';


function ProfesorState(props) {
  
    const _initialState = {
       
    };

    const [state, dispatch] =useReducer(ProfesorReducer, _initialState);

    return (
        <ProfesorContext.Provider value={{}}>
            {props.children}
        </ProfesorContext.Provider>
    )
}

export default ProfesorState