import { useState } from "react";
import noteService from "../services/notes";

const NoteForm = ({
  notes,
  setNotes,
  // setErrorMessage
}) => {
  const [newNote, setNewNote] = useState("");

  const addNote = async (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

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
