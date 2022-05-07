import React from 'react'
import InputConductStudentTable from '../../atoms/inputConductStudentTable/InputConductStudentTable'
import InputNoteStudentTable from '../../atoms/inputNoteStudentTable/InputNoteStudentTable'
import LabelNoteStudenAverage from '../../atoms/labelNoteStudenAverage/LabelNoteStudenAverage'
import NameStudentRowTableNotes from '../../atoms/nameStudentRowTableNotes/NameStudentRowTableNotes'
import './style.css'

function RowStudentNotes() {
  return (
    <tr className="tableListNotes--body__row">
          <NameStudentRowTableNotes name="Richard Aguilar Montano Anthony"/>
          <InputNoteStudentTable/> 
          <InputNoteStudentTable/>
          <InputNoteStudentTable/>
          <LabelNoteStudenAverage valueAverage='10'/>
          <InputNoteStudentTable/>
          <InputNoteStudentTable/>
          <InputNoteStudentTable/>
          <LabelNoteStudenAverage valueAverage='10.00'/>
          <LabelNoteStudenAverage valueAverage='10.00'/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
          <InputConductStudentTable/>
    </tr>
  )
}

export default RowStudentNotes