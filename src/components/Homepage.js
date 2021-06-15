import React, { useState } from 'react';
import '../App.css';
import NewNote from './NewNote';
import List from './List';
import Note from './Note';

// Renders the root page with a list of articles and the selected article
function Homepage() {

  const testDate = new Date();

  const testNotes = [
    {
      id: "note1",
      title: "Note 1",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      lastEdited: testDate
    },
    {
      id: "note2",
      title: "Note 2",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      lastEdited: testDate
    },
    {
      id: "note3",
      title: "Note 3",
      content: "Nam purus diam, elementum at nibh nec, molestie finibus sem. Cras lacus nibh, accumsan eu volutpat vitae, hendrerit id sapien. Curabitur dapibus convallis condimentum. Nulla at tellus quis velit volutpat pharetra ut vel tellus. Ut suscipit sit amet enim nec facilisis. Pellentesque accumsan lacinia orci pharetra vulputate. Integer fringilla, ligula eu tristique iaculis, risus purus cursus nisi, sollicitudin gravida velit eros ut dolor. Vestibulum justo nunc, facilisis ut eleifend sit amet, lacinia et nisl. Aliquam efficitur, tortor vitae sollicitudin cursus, nibh odio pulvinar massa, quis viverra diam augue eget tortor. Nam et lobortis arcu.",
      lastEdited: testDate
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
    //For the id, convert the title to lowercase and remove any spaces
    const id = title.replace(/\s/g, '').toLowerCase();
    let newNotes = notes;
    if (edit) {
      notes[noteIndex] =
      {
        id: id,
        title: title,
        content: content,
        lastEdited: modified
      }
    } else {
      newNotes.push({
        id: id,
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
