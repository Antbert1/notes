import React, { useState } from 'react';
import '../App.css';
import NewNote from './NewNote';
import List from './List';
import Note from './Note';

// Renders the root page with a list of articles and the selected article
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

  // Modal can either show add or edit functionality, initialised as add by setting edit to false
  const [modal, setModal] = useState({show: false, edit: false});
  // Notes begins empty, though this would ordinarily contain fetched data, commented option above for dummy data
  const [notes, updateNotes] = useState(testNotes);
  // Track the index of the selected note
  const [noteIndex, changeIndex] = useState(0);

  // Set modal to true and set the type
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
    // If editing, use currently selected note and update it. If adding, push the new note onto the list

    // Create a lastmodified date
    const modified = new Date();
    let newNotes = notes;
    if (edit) {
      notes[noteIndex] =
      {
        title: title,
        content: content,
        lastEdited: modified
      }
    } else {
      newNotes.push({
        title: title,
        content: content,
        lastEdited: modified
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
      <section className="header">
        <div className="row">
          <h1>Notes</h1>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-4">
            <button className="btn addNote" onClick={() => { showModal(false) }}>Add Note</button>
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
      </section>
    </div>
  );
}

export default Homepage;
