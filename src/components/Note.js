import React, { useState } from 'react';

function Note(props) {

  return (
    <div className="individualNote">
      <div className="noteTitle">
        {props.note.title}
      </div>
      <div className="dateMod">
        {props.note.lastEdited.toString()}
      </div>
      <div className="noteContent">
        {props.note.content}
      </div>
      <button onClick={() => { props.editNote(true) }}>Edit</button>
    </div>
  );
}

export default Note;
