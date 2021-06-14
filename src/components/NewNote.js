import React, { useState, Button } from 'react';
import Modal from 'react-modal';

//Opens a modal that can either add or edit a note, depending on the edit flag

function NewNote(props) {

  //Set defaults as blank, but use the current note prop if it is an edit
  let defaultTitle = "";
  let defaultContent = "";
  if (props.edit) {
    defaultTitle = props.currentNote.title;
    defaultContent = props.currentNote.content;
  }

  const [titleValue, setTitleValue] = useState(defaultTitle);
  const [contentValue, setContentValue] = useState(defaultContent);


  function closeModal(){
    props.closeModal()
  }

  function handleTitleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleContentChange(event) {
    setContentValue(event.target.value);
  }

  function handleSubmit() {
    // Take state values and send these back to addNote
    props.addNote(titleValue, contentValue, props.edit);
    props.closeModal();
  }

  return (
    <Modal
         isOpen={true}
         onRequestClose={closeModal}
       >
         <form onSubmit={handleSubmit}>
           <label>
             Title
             <input type="text" value={titleValue} onChange={handleTitleChange} />
           </label>
           <label>
             Content
             <input type="text" value={contentValue} onChange={handleContentChange} />
           </label>
           <input type="submit" value={props.edit ? "Edit": "Save"}/>
         </form>
         <button onClick={closeModal}>Close</button>
       </Modal>
  );
}

export default NewNote;
