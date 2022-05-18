import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import ProfesorContext from "../../../context/profesor/ProfesorContext";

function InputNoteStudentTable({identifyNote, score ,action}) {
  const { updateNote } = useContext(ProfesorContext);
  const scoreFloat = parseFloat(score);

  if (score == NaN) {
    scoreFloat = 0.0;
  }

  const noteInitialState={
    id:identifyNote,
    score:scoreFloat,
    action,
    conduct:""
  }
  const [stateNote, setStateNote] = useState(noteInitialState);

  // useEffect(() => {
  //   setStateNote({
  //     ...stateNote,
  //     note:score
  //   });
  // }, []);

  const handleChange = (event) => {
    const value = parseFloat(event.target.value);
    if (value <= 10 && value >= 0) {
      setStateNote({
        ...stateNote,
        score:value.toFixed(2)
      });
    }
  };

  const updateScore = () => {
    // id,action, score,conduct
    // console.log("updating")
    // call method from professor context for updating note
    updateNote(stateNote);
  };

  return (
    <td className="professorNotes--table--row__noteStudent__inputContainer">
      <input
        className="professorNotes--table--row__noteStudent__inputContainer__input"
        type="number"
        step="0.05"
        min="0.00"
        max="10.00"
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            // e.preventDefault();
            updateScore();
            // updateNote(stateNote);
          }
        }}
        value={stateNote.score}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </td>
  );
}

export default InputNoteStudentTable;
