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
       className="addEditNote"
       centered
     >
       <div className="noteHeader">
         {props.edit ?
           <h2>Edit Note</h2>
           :
           <h2>Add Note</h2>
         }
         <img onClick={closeModal} src={require('../assets/closeIcon.png').default} className="closeIcon" alt="close icon"/>
       </div>

      <form onSubmit={handleSubmit}>
        <div className="inputTitle">Title</div>
        <input className="inputStyle" type="text" value={titleValue} onChange={handleTitleChange} />
        <div className="inputTitle">Content</div>
        <textarea className="inputStyle" rows={5} value={contentValue} onChange={handleContentChange} />
        <div>
          <input type="submit" value={props.edit ? "Edit": "Save"} className="btn editBtn"/>
        </div>
      </form>
     </Modal>
  );
}

export default NewNote;
