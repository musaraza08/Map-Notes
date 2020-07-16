import * as React from "react";
import withStaticProps from "./withStaticProps";
import SelectedMarker from "./SelectedMarker";
import AddNoteModal from "./AddNoteModal";

import {noteInterface, notesState} from './typescriptInterfaces'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

interface mapComponentProps {
  onMapsClick(event: any): any;
  notes: notesState["notes"];
  selectedMarker: noteInterface;
  setSelectedMarker(marker: noteInterface): any;
  addNoteModal: boolean;
  setAddNoteModal(value: boolean): any;
  lat: number;
  lng: number;
  title: string;
  description: string;
  updateNote(event: any): any;
  handleModalButtonClick(event: any): any;
}

const MapComponent = ({
  onMapsClick,
  notes,
  selectedMarker,
  setSelectedMarker,
  addNoteModal,
  setAddNoteModal,
  lat = 31.796,
  lng = 74.0159,
  title,
  description,
  updateNote,
  handleModalButtonClick,
}: mapComponentProps) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: lat, lng: lng }}
    onClick={onMapsClick}
  >
    {notes.map((note: any, key: any) => (
      <Marker
        key={key}
        onClick={() => {
          setSelectedMarker(note);
        }}
        position={{ lat: note.lat, lng: note.lng }}
      />
    ))}

    {selectedMarker && (
      <SelectedMarker
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
      ></SelectedMarker>
    )}

    {addNoteModal && (
      <AddNoteModal
        setAddNoteModal={setAddNoteModal}
        lat={lat}
        lng={lng}
        title={title}
        updateNote={updateNote}
        description={description}
        handleModalButtonClick={handleModalButtonClick}
      ></AddNoteModal>
    )}
  </GoogleMap>
);

export default withStaticProps(withScriptjs(withGoogleMap(MapComponent)));
