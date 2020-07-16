export interface noteInterface {
    title: string; 
    description: string; 
    lat: number; 
    lng: number;
}

export interface notesState {
  notes: noteInterface[];
}

export interface addNoteModalProps {
    setAddNoteModal(set: boolean): any;
    lat: number;
    lng: number;
    title: string;
    updateNote(obj: any): any;
    description: string;
    handleModalButtonClick(e: object): any;
  }

  export interface mapComponentProps {
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