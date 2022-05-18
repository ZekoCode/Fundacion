import React,{useContext} from "react";
import RowStudentNotes from "../../molecules/rowStudentNotes/RowStudentNotes";
import "./style.css";
import ProfesorContext from "../../../context/profesor/ProfesorContext";
import {v4} from "uuid";

function TableNotes() {
  const {stateProfesor}=useContext(ProfesorContext)

  return (
    <table className="tableListNotes">
      <thead className="tableListNotes--head">
        <tr className="tableListNotes--head__row">
          <th className="tableListNotes--head__cel__name">
            <p>
              Nombres y Apellidos
            </p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>P_1</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>P_2</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>EQ1</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>PQ1</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>P_3</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>P_4</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>EQ2</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>PQ2</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>PA</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>C_1</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>C_2</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>CQ1</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>C_3</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>C_4</p>
          </th>
          <th className="tableListNotes--head__cel">
            <p>CQ2</p>
          </th>
          {/* <th className="tableListNotes--head__cel">
            <p>CF</p>
          </th> */}
        </tr>
      </thead>
      <tbody className="tableListNotes--body">
        {
          stateProfesor.calificaciones.map((item,index)=>{
            if(item.Materia===stateProfesor.currentCourse.materia && item.Curso===stateProfesor.currentCourse.curso){
               const temporalId=v4()
              return(
                <RowStudentNotes key={temporalId} id={index} dataInfo={item}/>
              )
            }
          })
        }
      </tbody>
    </table>
  );
}

export default TableNotes;