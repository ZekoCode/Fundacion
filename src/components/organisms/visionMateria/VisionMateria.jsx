import React from 'react'
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './Materia.css'
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
                        <ButtonForm sesion='Configuracion' />
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

                    <table className='Tabla--materia'>
                        <th className='th--materia-panel'>
                            Materias
                        </th>
                        <th className='thr'>
                            Activo
                        </th>
                        

                        <tr className='tr--materia'>
                            <td className='td--materia'>Ciencias Sociales 8.GBU</td>
                            <td className='td--materia'>SI</td>
                        </tr>
                    </table>  
                    
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default VisionMateria