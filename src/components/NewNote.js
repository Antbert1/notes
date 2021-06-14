import React, { useState, Button } from 'react';
import Modal from 'react-modal';

function NewNote(props) {

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal(){
    props.closeModal()
  }

  return (
    <Modal
         isOpen={true}
         onRequestClose={closeModal}
       >
         <button onClick={closeModal}>Close</button>
         Test
       </Modal>
  );
}

export default NewNote;
