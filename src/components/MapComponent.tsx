import * as React from "react";
import withStaticProps from "./withStaticProps";
import SelectedMarker from "./SelectedMarker";
import AddNoteModal from "./AddNoteModal";
import { MapComponentProps } from "./typescriptInterfaces";
import { compose, pipe } from "ramda";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapComponent = ({
  onMapsClick,
  notes,
  selectedMarker,
  setSelectedMarker,
  showModal,
  lat,
  lng,
  title,
  description,
  updateNote,
  handleModalButtonClick,
}: MapComponentProps) => (
  <GoogleMap
    defaultZoom={8}
    center={{ lat: Math.round(lat), lng: Math.round(lng) }}
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

    {showModal && (
      <AddNoteModal
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

const WrappedMapComponent = compose(
  withStaticProps,
  withScriptjs,
  withGoogleMap
);

export default WrappedMapComponent(MapComponent);
