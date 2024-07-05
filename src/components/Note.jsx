import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Note(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<Zoom in={true} timeout={{ enter: 500, exit: 500 }}>
				<Fab>
					<DeleteIcon onClick={handleClick} />
				</Fab>
			</Zoom>
		</div>
	);
}

export default Note;
