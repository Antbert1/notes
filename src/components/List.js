import React, { useState } from 'react';

function List(props) {

  return (
    <div>
      {props.notes.map((note, index) => (
        <div key={index} className="note" onClick={() => { props.selectNote(index) }}>
          {note.title}
        </div>
      ))}
    </div>
  );
}

export default List;
