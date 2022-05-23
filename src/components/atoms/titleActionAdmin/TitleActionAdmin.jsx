import React from "react";
import { useContext } from "react";
import AdministradorContext from "../../../context/administrator/adminContext";
import './style.css'

function TitleActionAdmin({titleText}) {

  const {stateAdministrador}=useContext(AdministradorContext)

    return(
      <h1 className="title--course">{stateAdministrador.currentAction}</h1>
    )
  }
  
export default TitleActionAdmin