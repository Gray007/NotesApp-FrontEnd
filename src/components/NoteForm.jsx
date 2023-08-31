import { useState } from "react";
import noteService from "../services/notes";

const NoteForm = ({
  notes,
  setNotes,
  noteFormRef
  // setErrorMessage
}) => {
  const [newNote, setNewNote] = useState("");

  const addNote = async (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: true,
    };

    noteFormRef.current.toggleVisibility()
    const saveNote = await noteService.create(noteObject);
    setNotes(notes.concat(saveNote));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  );
};

export default NoteForm;
