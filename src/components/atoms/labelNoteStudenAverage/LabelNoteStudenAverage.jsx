import React from 'react'
import './style.css'

function LabelNoteStudenAverage({valueAverage}) {

  const [valueText,setValue] = React.useState(valueAverage.toFixed(2))

  return (
    <td className="professorNotes--table--row__noteLabelAverage__container">
        <p className="professorNotes--table--row__noteLabelAverage__label">{valueText}</p>
    </td>
  )
}

export default LabelNoteStudenAverage