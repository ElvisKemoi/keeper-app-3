import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([
		{ title: "This is the title ", content: "This is the content" },
	]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					deleteNote={deleteNote}
				/>
			))}

			<Footer />
		</div>
	);
}

export default App;