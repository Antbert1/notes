import React, { useState } from 'react';

// Render a list of notes, sent as a prop, and select with the select prop that goes back to the homepage function

function List(props) {

  return (
    <div>
      {props.notes.map((note, index) => (
        <div key={index} className={props.index==index ? "note selected" : "note"} onClick={() => { props.selectNote(index) }}>
          {note.title}
        </div>
      ))}
    </div>
  );
}

export default List;
