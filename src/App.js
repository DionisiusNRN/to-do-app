import { useState } from "react";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "heloo",
    },
  ]);
  const [inputNote, setInputNote] = useState("");

  function handleInputChange(e) {
    setInputNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); //supaya tidak refresh
    if (inputNote.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote,
      };
      setNotes([...notes, newNote]); // supaya value baru bisa masuk tanpa me-replace data yg sudah ada. jadi data yg sudah ada tidak hilang.
      setInputNote(""); // ketika klik add maka inputnya akan kembali kosong
    }
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id); // supaya id yang tidak dipilih akan tetap ada datanya
    setNotes(updatedNotes);
  }

  return (
    <div>
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Note"
          value={inputNote}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            {/* supaya userinterface tdk langsung dijalankan maka perlu jadikan arrow function dahulu */}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
