import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function Note(props) {

  return (
    <div className="individualNote">
      <div className="noteTitle">
        <Link to={{
           pathname: `/note/${props.note.id}`,
           state: {note: props.note}
        }}>
          {props.note.title}
        </Link>    
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
