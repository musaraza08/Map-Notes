import { NoteInterface, NotesState } from "../../components/typescriptInterfaces";

export const ADD_NOTE = "ADD_NOTE";
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECIEVE_API_DATA = "RECIEVE_API_DATA";
export const SET_LAT_LNG = "SET_LAT_LNG";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const addNote = (payload: NoteInterface) => ({
  type: ADD_NOTE,
  payload: payload,
});

export const setLatLng = (payload: NotesState["latLng"]) => ({
    type: SET_LAT_LNG,
    payload: payload,
  });

export const requestApiData = () => ({ type: REQUEST_API_DATA });

export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const recieveApiData = (data: any) => ({
  type: RECIEVE_API_DATA,
  payload: data
});
