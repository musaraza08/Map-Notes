import * as React from "react";
import { useSelector } from "react-redux";
import {noteInterface, notesState} from './typescriptInterfaces'
import { NoteButton } from "./styled";

const NotesList: React.FC = () => {

  const notes = useSelector<notesState, notesState["notes"]>(
    (state) => state.notes
  );

  const NotesMapper = () =>
    notes.map((note: noteInterface, index:number) => <NoteButton key={index}>{note.title}</NoteButton>);

  return <div>{NotesMapper()}</div>;
};

export default NotesList;
