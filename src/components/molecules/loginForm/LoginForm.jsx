import React, { useState, useContext} from "react";
import SessionContext from "../../../context/session/SessionContext";
import "./styles.css";
import {useNavigate} from 'react-router-dom'

function LoginForm() {
  const navigating=useNavigate()
  const {login} = useContext(SessionContext);

  const credentials = {
    typeCout: "",
    cedula: "",
    password: "",
  };

  const [credentialsState, setCredentialsState] = useState(credentials);

  const handleInputChange = (e) => {
    setCredentialsState({
      ...credentialsState,
      [e.target.name]: e.target.value,
    });
  };

  const initSession =async (e) => {
    try {
      e.preventDefault();

      const isAutorizated=await login(credentialsState);
      
      if(isAutorizated){
        navigating('/curso')
      }

      setCredentialsState({
      typeCout: "",
      cedula: "",
      password: "",
    });
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form className="form--form" onSubmit={initSession}>
      <h1 className="form--title">Iniciar Sesion</h1>
      <div className="controls">
        <i className="bi bi-envelope-fill"></i>
        <input
          className="control--form__input"
          type="cedula"
          name="cedula"
          id="cedula"
          placeholder="Ingrese su cedula..."
          value={credentialsState.cedula}
          onChange={handleInputChange}
        />
      </div>
      <div className="controls">
        <i className="bi bi-lock-fill"></i>
        <input
          className="control--form__input"
          type="password"
          name="password"
          id="contraseña"
          placeholder="Ingrese su contraseña..."
          value={credentialsState.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="entradas">
        <input
          type="radio"
          name="typeCout"
          id="administrador"
          value="administrador"
          onChange={handleInputChange}
        />
        <label className="label-radio administrador" htmlFor="administrador">
          Administrador
        </label>

        <input
          type="radio"
          name="typeCout"
          id="profesor"
          value="profesor"
          onChange={handleInputChange}
        />
        <label className="label-radio profesor" htmlFor="profesor">
          Profesor
        </label>
      </div>

      {credentialsState.cedula === "" ||
      credentialsState.password === "" ||
      credentialsState.typeCout === "" ? (
        <button className="btn--submit disable" type="submit" disabled>
          Ingresar
        </button>
      ) : (
        <button className="btn--submit" type="submit">
          Ingresar
        </button>
      )}
    </form>
  );
}

export default LoginForm;
