import React from 'react'
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './Profesor.css'
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
import TitleForm from '../../atoms/titleForm/TitleForm';
import Footer from '../../atoms/footer/Footer';
import EstadoMenu from '../../atoms/estadoMenu/EstadoMenu';

function VisionProfesor() {

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

                    <TitleForm text='Profesores' />

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
                            <div className='field'>
                                <label>Titulacion</label>
                                <input name='Titulo' type='text' autocomplete />
                            </div>
                            <div className='field'>
                                <label>Contraseña</label>
                                <input name='contraseña' type='password' autocomplete />
                            </div>
                            
                            <button className='submit'>Guardar</button>
                            
                        </form>
                    </main>
                    <br/><br/>

                    <table className='Tabla--profez'>
                        <th className='th--profez-panel'>
                            Apellidos
                        </th>
                        <th className='th--profez-panel'>
                            Nombres
                        </th>
                        <th className='th--profez-panel'>
                            Curso
                        </th>
                        <th className='th--profez-panel'>
                            Cedula
                        </th>
                        <th className='th--profez-panel'>
                            Telefono
                        </th>
                        <th className='th--profez-panel'>
                            Direccion
                        </th>
                        <th className='th--profez-panel'>
                            Titulacion
                        </th>
                        <th className='th--profez-panel'>
                            Contraseña
                        </th>
                        <th className='thr'>
                            Activo
                        </th>
                        

                        <tr className='tr--profez'>
                            <td className='td--profez'>AGUILAR MONTAÑO</td>
                            <td className='td--profez'>RICHARD ANTHONY</td>
                            <td className='td--profez'>1.BGU</td>
                            <td className='td--profez'>178945372</td>
                            <td className='td--profez'>0999716754</td>
                            <td className='td--profez'>Av America y Amazonas</td>
                            <td className='td--profez'>Dr Calcomanias</td>
                            <td className='td--profez'>Picazonosos</td>
                            <td className='td--profez'>SI</td>
                        </tr>
                    </table> 

                    <br/><br/><br/><br/>
                    <table className='Tabla--profez'>
                        <th className='th--profez-panel'>
                            Apellidos
                        </th>
                        <th className='th--profez-panel'>
                            Nombres
                        </th>
                        <th className='th--profez-panel'>
                            Curso
                        </th>
                        <th className='th--profez-panel'>
                            Cedula
                        </th>
                        <th className='th--profez-panel'>
                            Telefono
                        </th>
                        <th className='th--profez-panel'>
                            Direccion
                        </th>
                        <th className='th--profez-panel'>
                            Titulacion
                        </th>
                        <th className='th--profez-panel'>
                            Contraseña
                        </th>
                        <th className='thr'>
                            Inactivo
                        </th>
                        

                        <tr className='tr--profez'>
                            <td className='td--profez'>DORMIDO VIZCAINO</td>
                            <td className='td--profez'>MARLON SONAMBULO</td>
                            <td className='td--profez'>2.BGU</td>
                            <td className='td--profez'>178945372</td>
                            <td className='td--profez'>0999716754</td>
                            <td className='td--profez'>Av America y Amazonas</td>
                            <td className='td--profez'>Lic Sueños</td>
                            <td className='td--profez'>Flojera1</td>
                            <td className='td--profez'>SI</td>
                        </tr>
                    </table>   

                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionProfesor