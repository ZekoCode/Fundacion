import React from "react";
import InputConductStudentTable from "../../atoms/inputConductStudentTable/InputConductStudentTable";
import InputNoteStudentTable from "../../atoms/inputNoteStudentTable/InputNoteStudentTable";
import LabelNoteStudenAverage from "../../atoms/labelNoteStudenAverage/LabelNoteStudenAverage";
import NameStudentRowTableNotes from "../../atoms/nameStudentRowTableNotes/NameStudentRowTableNotes";
import "./style.css";

function RowStudentNotes({ dataInfo, id }) {
  // console.log(dataInfo)

  return (
    <tr key={id} className="tableListNotes--body__row">
      <NameStudentRowTableNotes name={dataInfo.Estudiante} />
      <InputNoteStudentTable
        action="parcial_1"
        identifyNote={dataInfo.Id}
        score={dataInfo.p1 || 0.0}
      />
      <InputNoteStudentTable
      
        action="parcial_2"
        identifyNote={dataInfo.Id}
        score={dataInfo.p2 || 0.0}
      />
      <InputNoteStudentTable
        action="examen_quimestral_1"
        identifyNote={dataInfo.Id}
        score={dataInfo.exq1 || 0.0}
      />
      <LabelNoteStudenAverage valueAverage={dataInfo.pq1 || 0.0} />
      <InputNoteStudentTable
        action="parcial_3"
        identifyNote={dataInfo.Id}
        score={dataInfo.p3 || 0.0}
      />
      <InputNoteStudentTable
        action="parcial_4"
        identifyNote={dataInfo.Id}
        score={dataInfo.p4 || 0.0}
      />
      <InputNoteStudentTable
        action="examen_quimestral_2"
        identifyNote={dataInfo.Id}
        score={dataInfo.exq2 || 0.0}
      />
      <LabelNoteStudenAverage valueAverage={dataInfo.pq2 || 0.0} />
      <LabelNoteStudenAverage valueAverage={dataInfo.pa || 0.0} />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.c1}
        action="conducta_1"
      />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.c2 }
        action='conducta_2'
      />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.cq1 }
        action='conducta_quimestral_1'
      />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.c3 }
        action='conducta_3'
      />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.c4 }
        action='conducta_4'
      />
      <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        conduct={dataInfo.cq2 }
        action='conducta_quimestral_2'
      />
      {/* <InputConductStudentTable
        identifyConduct={dataInfo.Id}
        valueConduct={dataInfo.cq2 }
        action='parcial_4"
      /> */}
    </tr>
  );
}

export default RowStudentNotes;
