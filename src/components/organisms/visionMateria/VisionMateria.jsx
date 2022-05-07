import React from 'react'
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './estilos.css'
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
import TitleForm from '../../atoms/titleForm/TitleForm';
import Footer from '../../atoms/footer/Footer';
import EstadoMenu from '../../atoms/estadoMenu/EstadoMenu';

function VisionMateria() {

    return (


        <div className="contenedor">

            <div className='contenedor--main'>

                <div className="menu">
                    <SubtitleForm text='Gestionar' />

                    <div className='menu--main'>
                        <ButtonForm sesion='Estudiantes' />
                        <ButtonForm sesion='Profesores' />
                        <ButtonForm sesion='Materias' />
                        <ButtonForm sesion='Cursos' />
                        <ButtonForm sesion='Calificaciones' />
                    </div>

                    <ButtonForm sesion='Cerrar Sesion' />

                </div>

                <div className="contenido">

                    <TitleForm text='Materias' />

                    <main>
                        
                        <form>
                            <div className='field'>
                                <label>Nombre de la materia</label>
                                <input name='nombre' type='name'  autocomplete />
                            </div>
                            
                            <button className='submit'>Guardar</button>
                            
                        </form>
                    </main>
                    <br/><br/>

                    <ul className='mostrador'>
                        <li >Nombres</li>
                        <EstadoMenu estado='Activo'/>
                    </ul>  
                    
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionMateria