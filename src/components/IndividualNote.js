import React, { useParams } from 'react';

// Shows just the note as an individual page
function IndividualNote(props) {

  return (
    <div className="container">
      <div className="individualNote">
        <div className="noteTitle">
          {props.location.state.note.title}
        </div>
        <div className="dateMod">
          Last Modified: {props.location.state.note.lastEdited.toLocaleString()}
        </div>
        <div className="noteContent">
          {props.location.state.note.content}
        </div>
      </div>
    </div>
  );
}

export default IndividualNote;
