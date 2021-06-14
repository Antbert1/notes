import React, { useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import List from './components/List';

function App() {

  const testNotes = [
    {
      title: "note 1",
      content: "fgggg"
    },
    {
      title: "note 2",
      content: "yuiyuoiu"
    },
    {
      title: "note 3",
      content: "cvbcvbcvb"
    }
  ];

  const [modal, setModal] = useState(false);
  const [notes, updateNotes] = useState(testNotes);
  const [noteIndex, changeIndex] = useState(0);

  function showModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function selectNote(index) {
    changeIndex(index)
  }

  function addNote(title, content) {
    let newNotes = notes;
    newNotes.push({
      title: title,
      content: content
    });
    updateNotes(newNotes);
  }

  return (
    <div className="container">
      {modal &&
        <NewNote closeModal={closeModal} addNote={addNote}/>
      }
      <div className="row header">
        <h1>Notes</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button onClick={showModal} className="addNote">Add Note</button>
          <List notes={notes} selectNote={selectNote} index={noteIndex}/>
        </div>
        <div className="col-md-8">
          {notes.length === 0 ?
            <div className="noNotes">No notes yet. Click on 'Add Note' to get started.</div>
            :
            notes[noteIndex].content
          }
        </div>
      </div>
    </div>
  );
}

export default App;
