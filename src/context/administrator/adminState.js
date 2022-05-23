import React, { useReducer, useContext } from "react";
import SessionContext from "../session/SessionContext";
import AdministradorContext from "./adminContext";
import AdministradorReducer from "./adminReducer";
import axios from "axios";
import { host } from "../types";

function AdministradorState(props) {

  const { logout, state } = useContext(SessionContext);
  const _initialState = {
    view: "",
    data: [],
    currentAction: "",
  };

  const [stateAdministrador, dispatch] = useReducer(
    AdministradorReducer,
    _initialState
  );

const setCurrentAction = async (action) => {
    // console.log(stateAdministrador.currentAction)
    dispatch({
    type: "SET_CURRENT_ACTION",
    payload: action,
    });
  };

const getData =(url) => {
    axios.get(url, {
      headers: {
        authorization: state.token,
        typeuser: state.user.rol,
        cedula: state.user.Cedula,
      },
    })
    .then((jsonQuery) => {
        const data = jsonQuery.data;
        console.log(data)
        dispatch({
          type: "SAVE_REGUISTERS",
          payload: data,
        });
    })
    .catch((error) => {
        console.error("Server not found:" + error);
          logout()
    });
  };

  const searchData = async () => {

    let query;
    
    if (stateAdministrador.currentAction === "Estudiantes"){
      getData(`http://${host}/api/v1/get/estudiantes`);
    } else if (stateAdministrador.currentAction === "Profesores"){
      getData(`http://${host}/api/v1/get/profesores`);
    } else if (stateAdministrador.currentAction === "Cursos"){
      getData(`http://${host}/api/v1/get/cursos`);
    } else if (stateAdministrador.currentAction === "Materias"){
      getData(`http://${host}/api/v1/get/materias`);
    }

    if (query === undefined) {
      return;
    }
  };

  return (
    <AdministradorContext.Provider
      value={{
        stateAdministrador,
        setCurrentAction,
        searchData,
      }}
    >
      {props.children}
    </AdministradorContext.Provider>
  );
}

export default AdministradorState;
