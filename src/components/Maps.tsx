import * as React from "react";
import { MouseEvent } from "react";
import { ifElse, equals} from "ramda";
import { useDispatch, useSelector } from "react-redux";

import { GoogleMapProps} from "react-google-maps";

import {
  addNote,
  requestApiData,
  setLatLng,
  toggleModal,
} from "../redux";
import {
  noteSelector,
  latLngSelector,
  modalSelector,
} from "../redux/notes/noteSelectors";

import MapComponent from "./MapComponent";

import { NotesState } from "./typescriptInterfaces";

const useMapsState = (value: string) => {

  if (value == "title"){
    const [title, setTitle] = React.useState("");
    return {title: title, setTitle: setTitle}
  }
  if (value == "description"){
    const [description, setDescription] = React.useState("");
    return {description: description, setDescription: setDescription}
  }
  if (value == "selectedMarker"){
    const [selectedMarker, setSelectedMarker] = React.useState("");
    return {selectedMarker: selectedMarker, setSelectedMarker: setSelectedMarker}
  }
}

const Maps: React.FC<{}> = () => {

  const titleState = useMapsState("title")
  const descriptionState = useMapsState("description")
  const {selectedMarker, setSelectedMarker} = useMapsState("selectedMarker")

  const notes = useSelector<NotesState, NotesState["notes"]>(noteSelector);
  const latLng = useSelector<NotesState, NotesState["latLng"]>(latLngSelector);
  const showModal = useSelector<NotesState, NotesState["showModal"]>(modalSelector);

  const dispatch = useDispatch();

  React.useEffect(function () {

    dispatch(requestApiData());

  }, []);

  const updateNote = (event: any) => {

    const checkUpdateType = ifElse(
      (type: string) => equals(type, "title"),
      () => {titleState.setTitle(event.target.value)},
      () => {descriptionState.setDescription(event.target.value)}
    )

    checkUpdateType(event.target.id)

  };

  const onMapsClick: GoogleMapProps["onClick"] = (e) => {
    dispatch(setLatLng({ lat: e.latLng.lat(), lng: e.latLng.lng() }));
    dispatch(toggleModal());
  };

  const handleModalButtonClick = (e: MouseEvent<HTMLButtonElement>) => {

    const checkButtonType = ifElse(
      (buttonType: string) => equals(buttonType, "add"),
      () => {
        const note_payload = {
          _id: 0,
          title: titleState.title,
          description: descriptionState.description,
          lat: latLng.lat,
          lng: latLng.lng,
        };
        dispatch(addNote(note_payload));
      },
      () => {
        dispatch(toggleModal());
      }
    );

    checkButtonType(e.currentTarget.id);

    titleState.setTitle("");
    descriptionState.setDescription("");
  };

  return (
    <div>
      <MapComponent
        onMapsClick={onMapsClick}
        notes={notes}
        selectedMarker={selectedMarker}
        setSelectedMarker={setSelectedMarker}
        showModal={showModal}
        lat={latLng.lat}
        lng={latLng.lng}
        title={titleState.title}
        description={descriptionState.description}
        updateNote={updateNote}
        handleModalButtonClick={handleModalButtonClick}
      />
    </div>
  );
};

export default Maps;
