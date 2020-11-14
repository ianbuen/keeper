import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = React.useState(false);

  // update note state when fields change
  function editNote(event) {
    const {name, value} = event.target;
    
    // makes changes to specific fieldname of the note
    setNote((draft) => ({...draft, [name]: value}));
  }

  // adds a complete new note to the main list of notes
  function submitNote(event) {
    event.preventDefault();

    let fieldsComplete = false;

    // verify both fields
    note.title !== "" && note.content !== "" && (fieldsComplete = true);

    if (fieldsComplete) {
        props.onAdd(note);
        setNote({ title: "", content: "" });
    }
  }

  function expand() {
    setExpanded(true);

  }

  return (
    <div>
      <form className="create-note" onClick={expand}>
        <input name="title" style={{display: isExpanded ? "block" : "none"}} placeholder="Title" value={note.title} onChange={editNote} />
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} onChange={editNote} />
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
