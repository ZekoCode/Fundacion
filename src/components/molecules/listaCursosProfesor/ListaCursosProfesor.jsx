import React from 'react'

import Selector from '../../atoms/selectorCursos/Selector';
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';

import './style.css'
import LogoutButton from '../../atoms/logoutButton/LogoutButton';

function ListaCursosProfesor() {

const cources=[
    {
        id:0,
        course:'1ro BGU',
        matters:[
    {
      id_materia:65,
      value: "",
      nombre_materia: "6to EGB"
    }, {
      id_materia:76,
      value: "matematica",
      nombre_materia: "Matematicas"
    },
    {
      id_materia:9,
      value: "ciencia",
      nombre_materia: "Ciencias"
    },
    {
      id_materia:56,
      value: "Musica",
      nombre_materia: "Musica"
    }
        ]
    },
    {
        id:1,
        course:'8vo EGB',
        matters:[
    {
      id_materia:65,
      value: "",
      nombre_materia: "6to EGB"
    }, {
      id_materia:76,
      value: "matematica",
      nombre_materia: "Matematicas"
    },
    {
      id_materia:9,
      value: "ciencia",
      nombre_materia: "Ciencias"
    },
    {
      id_materia:56,
      value: "Musica",
      nombre_materia: "Musica"
    }
        ]
    }
]

  return (
    <div className="listCoursProfesor">
    <SubtitleForm text='Lista de cursos'/>
        <div className='listCoursProfesor__itemsContainer'>
            {
                
                cources.map((cours)=>{
                    // console.log(cours)
                    return <Selector key={cours.id} listaMaterias={cours.matters}/>
                })
            }
        </div>
        {/* <ButtonForm sesion='Cerrar Sesion' /> */}
        <LogoutButton/>
    </div>
  )
}

export default ListaCursosProfesor