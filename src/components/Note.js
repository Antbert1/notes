import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

// Displays the selected note on the right of the screen

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
        Last modified: {props.note.lastEdited.toLocaleString()}
      </div>
      <div className="noteContent">
        {props.note.content}
      </div>
      <button className="btn editBtn" onClick={() => { props.editNote(true) }}>Edit</button>
    </div>
  );
}

export default Note;
