import React from "react";
import InputConductStudentTable from "../../atoms/inputConductStudentTable/InputConductStudentTable";
import InputNoteStudentTable from "../../atoms/inputNoteStudentTable/InputNoteStudentTable";
import LabelNoteStudenAverage from "../../atoms/labelNoteStudenAverage/LabelNoteStudenAverage";
import NameStudentRowTableNotes from "../../atoms/nameStudentRowTableNotes/NameStudentRowTableNotes";
import "./style.css";

function RowStudentNotes({ dataInfo, id }) {


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
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
      <InputConductStudentTable
        identifyNote={dataInfo.Id}
        conduct={dataInfo.c1 || "-"}
      />
    </tr>
  );
}

export default RowStudentNotes;
