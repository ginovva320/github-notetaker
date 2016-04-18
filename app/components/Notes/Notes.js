import React from "react";
import NotesList from "./NotesList";
import AddNote from "./AddNote";

const Notes = props => {
  return (
    <div>
      <h3>Notes for {props.username}</h3>
      <AddNote username={props.username} addNote={props.addNote}/>
      <NotesList notes={props.notes}/>
    </div>
  );
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;