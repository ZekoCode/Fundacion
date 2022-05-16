import React, { useReducer ,useContext} from "react";
import ProfesorReducer from "./ProfesorReducer";
import ProfesorContext from "./ProfesorContext";
import axios from "axios";
import { host } from "../types";
import SessionContext from "../session/SessionContext";


function ProfesorState(props) {

  const {logout,state}=useContext(SessionContext)
  // const credentials={token:state.token,rol:state.user.rol,cedula:parseInt(state.user.Cedula)}

  const _initialState = {
    calificaciones: [],
    cursosConMaterias: [],
    currentCourse:{}
  };

  const [stateProfesor, dispatch] = useReducer(ProfesorReducer, _initialState);

  const formatData = async (data) => {
    let cursoYmateria = [];
    let curso = [];
    let materia = [];
    let result = [];

    const separateArray = function (arr, len) {
      let chunks = [];
      let i = 0;
      while (i < arr.length) {
        chunks.push(arr.slice(i, (i += len)));
      }
      return chunks;
    };

    data.map((obj) => cursoYmateria.push([obj.Curso, [obj.Materia]]));

    cursoYmateria.flat().forEach((cur, i) => {
      if (i % 2 === 0) curso.push(cur);
      if (i % 2 !== 0) materia.push(cur);
    });

    const uniqueCurso = [...new Set(curso)];
    let uniqueMateria = [...new Set(materia.flat())];

    uniqueMateria = separateArray(uniqueMateria, 2);

    uniqueCurso.forEach((arr, i) => {
      result.push([arr, uniqueMateria[i]]);
    });

    result = Object.fromEntries(result);
    cursoYmateria = [];
    for (const property in result) {
      // console.log(`${property}: ${result[property]}`)
      cursoYmateria.push({
        curso: property,
        materias: result[property],
      });
    }

    // console.log( result);
    // console.log(cursoYmateria)
    dispatch({
      type: "SAVE_CURSOS",
      payload: [...cursoYmateria],
    });
  };

  const updateNote= async ({id,action, score,conduct})=>{

    const noteToUpdate={id,
      id:id,
      parametro:action, 
      valorCalificacion:score,
      valorConducta:conduct,
    }

    const credentials={
      authorization:state.token,
      typeuser:state.user.rol
    }

    await axios.post(`http://${host}/api/v1/put/calificacion`,noteToUpdate,{headers:credentials})
      .then(()=>{
        getCalificaciones()
      })
      .catch(error=>console.error(error))
  }

  const getCalificaciones = async () => {
    
    // console.log(credentials)
    // const { token, rol, cedula } = credentials;
    await axios
      .get(`http://${host}/api/v1/get/calificaciones`, {
        headers: {
          authorization: state.token,
          typeuser: state.user.rol,
          cedula: state.user.Cedula,
        },
      })
      .then((jsonQuery) => {
        const data = jsonQuery.data;
        // console.log(jsonQuery)
        formatData(data);
        dispatch({
          type: "SAVE_CALIFICACIONES",
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Server not found:" + error);
          logout()
      });
  };

  const currentMatter=async(matter)=>{
    dispatch({
      type: "SELECT_CURRENT_MATTER",
      payload: matter,
    });
  }

  // formatear la informaicon para  poder iterarla de mejor manera en la UI

  return (
    <ProfesorContext.Provider value={{ getCalificaciones, stateProfesor ,currentMatter,updateNote}}>
      {props.children}
    </ProfesorContext.Provider>
  );
}

export default ProfesorState;
