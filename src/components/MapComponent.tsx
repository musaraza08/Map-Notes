import * as React from "react";

import {Title, Description, AddButton, CancelButton, ModalBox} from './styled'


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

export const MapComponent = withScriptjs(
  withGoogleMap(({googleMapURL,
  loadingElement,
  containerElement,
  mapElement,
  onMapsClick,
  notes,
  selectedMarker,
  setSelectedMarker,
  addNoteModal,
  setAddNoteModal,
  lat=31.796,
  lng=74.0159,
  note,
  description,
  updateNote,
  handleModalButtonClick}:any) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: lat, lng: lng }}
      onClick={onMapsClick}
    >
      {notes.map((note: any) => (
        <Marker
          onClick={() => {
            setSelectedMarker(note);
          }}
          position={{ lat: note.lat, lng: note.lng }}
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
          position={{
            lat: selectedMarker.lat,
            lng: selectedMarker.lng,
          }}
    
        >
           <div>
               
               <h3>Title</h3>
               {selectedMarker.title}
               <h3>Description</h3>
               {selectedMarker.description}
            </div> 
        </InfoWindow>
      )}


    {addNoteModal && (
        <InfoWindow
          onCloseClick={() => {
            setAddNoteModal(null);
          }}
          position={{
            lat: lat,
            lng: lng,
          }}
    
        >
           <ModalBox>
                <h3 >Title</h3>
               <Title id="title" value={note} onChange={updateNote}></Title>
               <h3 >Description</h3>
               <Description id="description" value={description} onChange={updateNote}></Description>
               <AddButton id="add" onClick={handleModalButtonClick}>Add Note</AddButton>
               <CancelButton  id="cancel" onClick={handleModalButtonClick}>Cancel</CancelButton>
            </ModalBox> 
        </InfoWindow>
      )}

        



    </GoogleMap>
  ))
);
