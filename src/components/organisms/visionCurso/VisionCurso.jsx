import React from 'react'
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm'
import './styles.css'
import Selector from '../../atoms/Selector'
import NotasForm from '../../atoms/notasForm/NotasForm'
import NombreEstudiante from '../../atoms/nombreEstudiante/NombreEstudiante'
import TextForm from '../../atoms/textForm/TextForm'
import TitleForm from '../../atoms/titleForm/TitleForm'

function VisionCurso() {

  const misMaterias=[
    {
      value: "",
      name: "6to EGB"
    }, {
      value: "matematica",
      name: "Matematicas"
    },
    {
      value: "ciencia",
      name: "Ciencias"
    },
    {
      value: "Musica",
      name: "Musica"
    }
  ]
  
  const misMaterias2=[
    {
      value: "",
      name: "7to EGB"
    }, {
      value: "pintura",
      name: "Pintura"
    },
    {
      value: "ciencia",
      name: "Ciencias"
    },
    {
      value: "Musica",
      name: "Musica"
    }
  ]

    return(
        
    <form> 
      <div className="contenedor">
        
        <div className="menu">
          <br/><br/>
          <SubtitleForm text='Lista de cursos'/>

          <br/><br/><br/><br/><br/><br/>
          


          <Selector listaMaterias={misMaterias}/>
          <Selector listaMaterias={misMaterias2}/>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">6to EGB</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">1ro BGU</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">2do BGU</option>
            </select>
          </div>

          <div className='form__control'>
            <select class="form__control--input">
              <option value="">3ro BGU</option>
            </select>
          </div>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div className='form__control'>
            <button className='btn--submit' type='submit'>Cerrar sesion</button>
          </div>

        </div>


        <div className="contenido">
          
          <TitleForm text='Matematicas'/><br/><br/><br/>
          <TextForm indices='P_1'/>
          <TextForm indices='P_2'/>
          <br/>
          <NombreEstudiante estudiante='Arevalo Vaca Aldair Sydenin'/>
          <NotasForm numero='10'/>
          <NotasForm numero='7'/>
          <NotasForm numero='8'/>
          <br/><br/>
          <hr />

        </div>


        <div className="pie">
        <p>Fundacion Eina @ Copyright 2022</p>
        </div>
      </div>
    </form>
  )
}

export default VisionCurso