import React from 'react';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './Estilos.css'
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
import TitleForm from '../../atoms/titleForm/TitleForm';
import Footer from '../../atoms/footer/Footer';
import EstadoMenu from '../../atoms/estadoMenu/EstadoMenu';

function VisionAlumno() {

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

                    <TitleForm text='Estudiantes' />

                    <main>
                        
                        <form>
                            <div className='field'>
                                <label>Nombre</label>
                                <input name='nombre' type='name'  autocomplete />
                            </div>
                            <div className='field'>
                                <label>Apellidos</label>
                                <input name='apellidos' type='name' autocomplete />
                            </div>
                            
                            <div className='field'>
                                <label>Cedula</label>
                                <input name='cedula' type='number' autocomplete />
                            </div>

                            <div className='field'>
                                <label>Email</label>
                                <input name='Email' type='email' autocomplete />
                            </div>
                            <div className='field'>
                                <label>Direccion</label>
                                <input name='Direccion' type='text' autocomplete />
                            </div>
                            <div className='field'>
                                <label>Teléfono</label>
                                <input name='Telefono' type='number' autocomplete />
                            </div>
                            
                            <button className='submit'>Guardar</button>
                            
                        </form>
                    </main>
                    <br/><br/>

                    <ul className='mostrador'>
                        <li >Apellidos</li>
                        <li >Nombres</li>
                        <li >Curso</li>
                        <li >Cedulas</li>
                        <li >Telefono</li>
                        <li >Direccion</li>
                        <EstadoMenu estado='Activo'/>
                    </ul>  

                    <br/><br/><br/><br/>
                    <ul className='mostrador'>
                        <li >Apellidos</li>
                        <li >Nombres</li>
                        <li >Curso</li>
                        <li >Cedulas</li>
                        <li >Telefono</li>
                        <li >Direccion</li>
                        <EstadoMenu estado='Inactivo'/>
                    </ul>  

                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionAlumno