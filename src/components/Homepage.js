import React, { useState } from 'react';
import '../App.css';
import NewNote from './NewNote';
import List from './List';
import Note from './Note';

function Homepage() {

  const d = new Date();

  const testNotes = [
    {
      id: "note1",
      title: "note 1",
      content: "fgggg",
      lastEdited: d
    },
    {
      id: "note2",
      title: "note 2",
      content: "yuiyuoiu",
      lastEdited: d
    },
    {
      id: "note3",
      title: "note 3",
      content: "cvbcvbcvb",
      lastEdited: d
    }
  ];

  const [modal, setModal] = useState({show: false, edit: false});
  const [notes, updateNotes] = useState(testNotes);
  const [noteIndex, changeIndex] = useState(0);

  function showModal(edit) {
    setModal({
      show: true,
      edit: edit
    });
  }

  function closeModal() {
    setModal(false);
  }

  function selectNote(index) {
    changeIndex(index)
  }

  function addNote(title, content, edit) {
    let newNotes = notes;
    if (edit) {
      notes[noteIndex] =
      {
        title: title,
        content: content
      }
    } else {
      newNotes.push({
        title: title,
        content: content
      });
    }
    updateNotes(newNotes);
  }


  return (
    <div className="container">
      {modal.show &&
        <NewNote
          closeModal={closeModal}
          addNote={addNote}
          currentNote={modal.edit ? notes[noteIndex] : null}
          edit={modal.edit}
        />
      }
      <div className="row header">
        <h1>Notes</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button onClick={() => { showModal(false) }} className="addNote">Add Note</button>
          <List notes={notes} selectNote={selectNote} index={noteIndex}/>
        </div>
        <div className="col-md-8">
          {notes.length === 0 ?
            <div className="noNotes">No notes yet. Click on 'Add Note' to get started.</div>
            :
            <Note note={notes[noteIndex]} editNote={showModal} />
          }
        </div>
      </div>
    </div>
  );
}

export default Homepage;
