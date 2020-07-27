import { MouseEvent, FormEvent } from "react";
import {
  GoogleMapProps
} from "react-google-maps";

export interface NoteInterface {
  _id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
}

export interface NotesState {
  latLng: {lat: number, lng: number}
  notes: NoteInterface[];
  showModal: boolean;
}

export interface AddNoteModalProps {
  lat: number;
  lng: number;
  title: string;
  updateNote(event: FormEvent<HTMLInputElement>): void;
  description: string;
  handleModalButtonClick(e: MouseEvent<HTMLButtonElement>): typeof MouseEvent;
  toggleModal(): void
}

export interface MapComponentProps {
  onMapsClick: GoogleMapProps["onClick"];
  notes: NotesState["notes"];
  selectedMarker: NoteInterface;
  setSelectedMarker(marker: NoteInterface): void;
  showModal: boolean;
  lat: number;
  lng: number;
  title: string;
  description: string;
  updateNote(event: FormEvent<HTMLInputElement>): void;
  handleModalButtonClick(event: MouseEvent<HTMLButtonElement>): typeof MouseEvent;
}
