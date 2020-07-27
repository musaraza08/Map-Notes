import { NotesState } from "../../components/typescriptInterfaces";

export const noteSelector = (state: NotesState) => state.notes;
export const latLngSelector = (state: NotesState) => state.latLng;
export const modalSelector = (state: NotesState) => state.showModal;
