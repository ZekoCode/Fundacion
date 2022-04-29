import React from 'react';
import SubtitleForm from '../../atoms/subtitleForm/SubtitleForm';
import './styles.css'
import Selector from '../../atoms/Selector';
import ButtonForm from '../../atoms/buttonForm/ButtonForm';
<<<<<<< HEAD
import TitleForm from '../../atoms/titleForm/TitleForm';
=======
import TitleForm from '../../atoms/titleForm/TitleForm'
>>>>>>> 113fe3e7ddd3a5133240d83eb8d3943e6a602689
import Footer from '../../atoms/footer/Footer';


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
        
<<<<<<< HEAD
    
=======
    // <form> 
>>>>>>> 113fe3e7ddd3a5133240d83eb8d3943e6a602689
      <div className="contenedor">
        
        <div className='contenedor--main'>
          <div className="menu">
          <SubtitleForm text='Lista de cursos'/>
            <div className='menu--main'>
              
             
            <Selector listaMaterias={misMaterias}/>
              <Selector listaMaterias={misMaterias2}/>
              <Selector listaMaterias={misMaterias}/>
              <Selector listaMaterias={misMaterias2}/>
              <Selector listaMaterias={misMaterias}/>
              <Selector listaMaterias={misMaterias2}/>
              <Selector listaMaterias={misMaterias2}/>
            </div>

            <ButtonForm sesion='Cerrar Sesion' />

          </div>

          <div className="contenido">
            
            <TitleForm text='Matematicas - 2do BGU'/>
            
            <table className='Tablas'>
              <th className='th'>
                Nombres y Apellidos
              </th>
              <th className='th'>
                P_1
              </th>
              <th className='th'>
                P_2
              </th>
              <th className='th'>
                EQ1
              </th>
              <th className='th'>
                PQ1
              </th>
              <th className='th'>
                P_3
              </th>
              <th className='th'>
                P_4
              </th>
              <th className='th'>
                EQ2
              </th>
              <th className='th'>
                PQ2
              </th>
              <th className='th'>
                PA
              </th>
              <th className='th'>
                C_1
              </th>
              <th className='th'>
                C_2
              </th>
              <th className='th'>
                CQ1
              </th>
              <th className='th'>
                C_3
              </th>
              <th className='th'>
                C_4
              </th>
              <th className='th'>
                CQ2
              </th>
              <th className='th'>
                CF
              </th>

<<<<<<< HEAD
            <tr className='tr'>
              <td className='tr'>AGUILAR MONTAÑO RICHARD CODIGO</td>
              <td className='td'>8</td>
              <td className='td'>8</td>
              <td className='td'>8</td>
              <td className='tdr'>8</td>
              <td className='td'>7</td>
              <td className='td'>6</td>
              <td className='td'>6</td>
              <td className='tdr'>6.3</td>
              <td className='tdr'>7.2</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
              <td className='td'>A</td>
            </tr>
          </table>
        </div>  
      
      <Footer/>
      </div>  
=======
              <tr className='tr'>
                <td className='tr'>AREVALO VACA ALDAIR SYDENIN</td>
                <td className='td'>10</td>
                <td className='td'>9</td>
                <td className='td'>7</td>
                <td className='tdr'>8.7</td>
                <td className='td'>8</td>
                <td className='td'>8</td>
                <td className='td'>10</td>
                <td className='tdr'>8</td>
                <td className='tdr'>8.4</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
                <td className='td'>A</td>
              </tr> 


            </table>
            
          </div>
        </div>

        <Footer/>
      </div>
      
    // </form>
>>>>>>> 113fe3e7ddd3a5133240d83eb8d3943e6a602689
  )
}

export default VisionCurso