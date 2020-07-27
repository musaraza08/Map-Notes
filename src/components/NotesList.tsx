import * as React from "react";
import { map } from "ramda";
import { useSelector, useDispatch } from "react-redux";
import { NoteInterface, NotesState } from "./typescriptInterfaces";
import { setLatLng } from "../redux";
import { NoteButton } from "./styled";

const NotesList: React.FC = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const mapFunctor = (note: NoteInterface) => (
    <NoteButton
      onClick={onNoteClick}
      data-lat={note.lat}
      data-lng={note.lng}
      key={note._id}
    >
      {note.title}
    </NoteButton>
  );

  const NotesMapper = () => (
    map(mapFunctor, notes)
  )

    const onNoteClick = (e: any) => {
      const latLng = {
        lat: e.target.getAttribute("data-lat"),
        lng: e.target.getAttribute("data-lng"),
      };
      dispatch(setLatLng(latLng));
    };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#204051" }}>NOTES</h2>
      {NotesMapper()}
    </div>
  );
};

export default NotesList;
