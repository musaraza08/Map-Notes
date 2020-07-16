import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import { addNote as addNoteAction } from "../redux";
import { noteSelector } from "../redux/notes/noteSelectors";

import MapComponent from "./MapComponent";

import {noteInterface, notesState} from './typescriptInterfaces'

const Maps: React.FC<{}> = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [lat, setLat] = React.useState(31.796);
  const [lng, setLng] = React.useState(74.0159);
  const [selectedMarker, setSelectedMarker] = React.useState(false);
  const [addNoteModal, setAddNoteModal] = React.useState(false);

  const updateNote = (event:any) => {
    if (event.target.id == "title") {
      setTitle(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const dispatch = useDispatch();

  const addNote = (note: noteInterface) => dispatch(addNoteAction(note));

  const notes = useSelector<notesState, notesState["notes"]>(noteSelector);

  const onMapsClick = (e: any) => {
    setLat(e.latLng.lat);
    setLng(e.latLng.lng);
    setAddNoteModal(true);
  };

  const handleModalButtonClick = (e: any) => {
    if (e.target.id == "add") {
      const note_payload = {
        title: title,
        description: description,
        lat: lat,
        lng: lng,
      };
      addNote(note_payload);
    }

    setTitle("");
    setDescription("");
    setAddNoteModal(null);
  };

  return (
    <MapComponent
      onMapsClick={onMapsClick}
      notes={notes}
      selectedMarker={selectedMarker}
      setSelectedMarker={setSelectedMarker}
      addNoteModal={addNoteModal}
      setAddNoteModal={setAddNoteModal}
      lat={lat}
      lng={lng}
      title={title}
      description={description}
      updateNote={updateNote}
      handleModalButtonClick={handleModalButtonClick}
    />
  );
};

export default Maps;
