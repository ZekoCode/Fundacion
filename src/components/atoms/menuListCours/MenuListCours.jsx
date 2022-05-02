import React from 'react'
import Selector from '../Selector'

function MenuListCours({cursos}) {
  return (
    <div className="menu">
        <SubtitleForm text='Lista de cursos'/>
        {/* <Selector listaMaterias={misMaterias}/>
        <Selector listaMaterias={misMaterias2}/>
        <Selector listaMaterias={misMaterias}/>
        <Selector listaMaterias={misMaterias2}/>
        <Selector listaMaterias={misMaterias}/>
        <Selector listaMaterias={misMaterias2}/>
        <Selector listaMaterias={misMaterias}/>
        <Selector listaMaterias={misMaterias2}/> */}

        {
            cursos.map(curso => (
                <Selector key={curso.id} listaMaterias={curso.materias}/>
            ))
        }

        <ButtonForm sesion='Cerrar Sesion' />

        </div>
  )
}

export default MenuListCours