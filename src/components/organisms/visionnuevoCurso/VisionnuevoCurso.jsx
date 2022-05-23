import React from 'react'
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './Cursos.css'
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
import TitleForm from '../../atoms/titleForm/TitleForm';
import Footer from '../../atoms/footer/Footer';
import EstadoMenu from '../../atoms/estadoMenu/EstadoMenu';

function VisionnuevoCurso() {

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

                    <TitleForm text='Cursos' />

                    <main>
                         
                        <form>
                            <div className='field'>
                                <label>Grado</label>
                                <input name='nombre' type='name'  autocomplete />
                            </div>
                            <div className='field'>
                                <label>Paralelo</label>
                                <input name='texto' type='text'  autocomplete />
                            </div>
                            
                            <button className='submit'>Guardar</button>
                            
                        </form>
                    </main>
                    <br/><br/>

                    <table className='Tabla--curso'>
                        <th className='th--curso-panel'>
                            Grado
                        </th>
                        <th className='th--curso-panel'>
                            Paralelo
                        </th>
                        <th className='thr'>
                            Activo
                        </th>
                        

                        <tr className='tr--curso'>
                            <td className='td--curso'>10.GBU</td>
                            <td className='td--curso'>A</td>
                            <td className='td--curso'>SI</td>
                        </tr>
                    </table> 
                    <br/><br/><br/><br/>

                    <table className='Tabla--curso'>
                        <th className='th--curso-panel'>
                            Grado
                        </th>
                        <th className='th--curso-panel'>
                            Paralelo
                        </th>
                        <th className='thr'>
                            Inactivo
                        </th>
                        

                        <tr className='tr--curso'>
                            <td className='td--curso'>8.BGU</td>
                            <td className='td--curso'>B</td>
                            <td className='td--curso'>SI</td>
                        </tr>
                    </table>
                    
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionnuevoCurso