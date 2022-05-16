import React from 'react';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './Alumno.css'
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
                        <ButtonForm sesion='Configuracion' />
                    </div>

                    <ButtonForm sesion='Cerrar Sesion' />

                </div>

                <div className="contenido">

                    <TitleForm text='Estudiantes' />

                    <main>

                        <form>
                            <div className='field'>
                                <label>Nombre</label>
                                <input name='nombre' type='name' autocomplete />
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
                    <br /><br />

                    <table className='Tabla--alumno'>
                        <th className='th--alumno-panel'>
                            Apellidos
                        </th>
                        <th className='th--alumno-panel'>
                            Nombres
                        </th>
                        <th className='th--alumno-panel'>
                            Curso
                        </th>
                        <th className='th--alumno-panel'>
                            Cedula
                        </th>
                        <th className='th--alumno-panel'>
                            Telefono
                        </th>
                        <th className='th--alumno-panel'>
                            Direccion
                        </th>
                        <th className='thr'>
                            Activo
                        </th>
                        

                        <tr className='tr--alumno'>
                            <td className='td--alumno'>AGUILAR MONTAÑO</td>
                            <td className='td--alumno'>RICHARD ANTHONY</td>
                            <td className='td--alumno'>1.BGU</td>
                            <td className='td--alumno'>178945372</td>
                            <td className='td--alumno'>0999716754</td>
                            <td className='td--alumno'>Av Manuel Cordoba Galarza y Simon Bolivar</td>
                            <td className='td--alumno'>SI</td>
                        </tr>
                    </table>

                    <br /><br /><br />
                    <table className='Tabla--alumno'>
                        <th className='th--alumno-panel'>
                            Apellidos
                        </th>
                        <th className='th--alumno-panel'>
                            Nombres
                        </th>
                        <th className='th--alumno-panel'>
                            Curso
                        </th>
                        <th className='th--alumno-panel'>
                            Cedula
                        </th>
                        <th className='th--alumno-panel'>
                            Telefono
                        </th>
                        <th className='th--alumno-panel'>
                            Direccion
                        </th>
                        <th className='thr'>
                            Inactivo
                        </th>
                        
                        <tr className='tr--alumno'>
                            <td className='td--alumno'>SUAREZ MANITO</td>
                            <td className='td--alumno'>LORENZO JEFFREY</td>
                            <td className='td--alumno'>1.BGU</td>
                            <td className='td--alumno'>1784456891</td>
                            <td className='td--alumno'>0998674582</td>
                            <td className='td--alumno'>Av La Gazca y Central</td>
                            <td className='td--alumno'>SI</td>
                        </tr>
                    </table>    

                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionAlumno