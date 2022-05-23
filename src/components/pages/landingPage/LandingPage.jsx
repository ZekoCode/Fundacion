import React from "react";
import './style.css'
import {useNavigate} from 'react-router-dom'
import Footer from '../../atoms/footer/Footer'
function LandingPage() {
  const navigator=useNavigate()

  return (
    <div className="landingPageContent">
      <header className="header">
        <img src="http://www.eina.org.ec/wp-content/uploads/2017/03/cropped-icon-192x192.png" alt="" className="header--logo__img" />
        <h1 className="header--title__funacion">Fundacion EINA</h1>

        <a className="header--link__login" onClick={()=>{
          navigator('/login')
        }}>Fundacion</a>
      </header>

      <main className="main">
        <p className="main--article__paragraph">
          La Función y el Propósito de la Aplicación es poder culminar con el
          desarrollo de la aplicación web que es un módulo de gestión de
          calificaciones que a la vez tendrá la bases tecnológicas necesarias
          para poder ser escalable como sistema académico acorde a los
          requerimientos antes establecidos.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.1792353242267!2d-78.46051327271763!3d-0.0685193086062739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d588b16062fbfd%3A0xa4731a3d42014029!2sFundacion%20Eina%20El%20Parvulario!5e0!3m2!1ses!2sec!4v1652385989275!5m2!1ses!2sec"
          className="main--article__map"
        ></iframe>
      </main>

      <Footer/>
    </div>
  );
}

export default LandingPage;
