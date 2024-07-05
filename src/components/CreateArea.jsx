import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const [expanded, setExpanded] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	return (
		<div>
			<form className="create-note">
				{expanded && (
					<Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
						<input
							name="title"
							onChange={handleChange}
							value={note.title}
							placeholder="Title"
						/>
					</Zoom>
				)}
				<Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
					<textarea
						onFocus={expand}
						name="content"
						onChange={handleChange}
						value={note.content}
						placeholder="Take a note..."
						rows={expanded ? "3" : "1"}
					/>
				</Zoom>
				{expanded && (
					<Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
						<Fab onClick={submitNote}>
							<AddIcon />
						</Fab>
					</Zoom>
				)}
			</form>
		</div>
	);
}

export default CreateArea;
