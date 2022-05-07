import React from 'react'
import './style.css'

function NameStudentRowTableNotes({name}) {
  return (
    <td className="professorNotes--table--row__nameStudent">
      <p>
        {name}
      </p>
    </td>
  )
}

export default NameStudentRowTableNotes