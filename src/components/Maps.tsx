import * as React from "react";

import {useDispatch, useSelector} from "react-redux";

import {addNote as addNoteAction} from '../redux';
import {NoteSelector} from '../redux/notes/noteSelectors'

import {MapComponent} from "./MapComponent"

import { NotesState } from "../redux/notes/noteReducer";



const Maps: React.FC<any> = () => {

  const [note, setNote] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [lat, setLat] = React.useState(31.796);
  const [lng, setLng] = React.useState(74.0159);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [addNoteModal, setAddNoteModal] = React.useState(null);
  

  const updateNote = (event: any) => {
    if (event.target.id == "title") {
      setNote(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  console.log(process);

  const updateLatLng = (event: any) => {
    setLat(event.latLng.lat);
    setLng(event.latLng.lng);
  };

  const dispatch = useDispatch();

  const addNote = (note: any) => {
    return dispatch(addNoteAction(note));
  };

  const notes = useSelector<NotesState, NotesState["notes"]>(NoteSelector);

  const onMapsClick = (e: any) => {
    
    updateLatLng(e);
    setAddNoteModal(true)

  };

  const handleModalButtonClick = (e:any) => {

    if(e.target.id == "add"){
        const note_payload = {
        title: note,
        description: description,
        lat: lat,
        lng: lng,
      };
      addNote(note_payload);
    } 

    setNote("");
    setDescription("");
    setAddNoteModal(null)

  };

  return (
    <div>

      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAvIy_-SQ-mIdX-olPiudYvSC2b6z7lpuY&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapsClick={onMapsClick}
        notes={notes}
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
        addNoteModal={addNoteModal}
        setAddNoteModal={setAddNoteModal}
        lat={lat}
        lng={lng}
        note={note}
        description={description}
        updateNote={updateNote}
        handleModalButtonClick={handleModalButtonClick}
        
      />
    </div>
  );
};

export default Maps;
