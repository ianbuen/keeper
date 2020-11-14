import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App() {

    const [notes, setNotes] = React.useState([]);

    const addNote = (note) => setNotes(prevNotes => [...prevNotes, note]);

    const deleteNote = (id) => setNotes((prevNotes) => {
        return prevNotes.filter((note, index) => {
            return id !== index;
        });
    });

    return (
        <div>
            <Header />

            <CreateArea onAdd={addNote} />

            {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />)}

            <Footer />
        </div>
    );
}

export default App;