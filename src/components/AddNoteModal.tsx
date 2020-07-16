import * as React from "react";

import {
  Title,
  Description,
  AddButton,
  CancelButton,
  ModalBox,
} from "./styled";

import { InfoWindow } from "react-google-maps";

interface AddNoteModalProps {
  setAddNoteModal(set: boolean): any;
  lat: number;
  lng: number;
  title: string;
  updateNote(obj: any): any;
  description: string;
  handleModalButtonClick(e: object): any;
}

class AddNoteModal extends React.Component<AddNoteModalProps, {}> {
  constructor(props: AddNoteModalProps) {
    super(props);
  }

  render() {
    const {
      setAddNoteModal,
      lat,
      lng,
      title,
      updateNote,
      description,
      handleModalButtonClick,
    } = this.props;

    return (
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
          <h3>Title</h3>
          <Title id="title" value={title} onChange={updateNote}></Title>
          <h3>Description</h3>
          <Description
            id="description"
            value={description}
            onChange={updateNote}
          ></Description>
          <AddButton id="add" onClick={handleModalButtonClick}>
            Add Note
          </AddButton>
          <CancelButton id="cancel" onClick={handleModalButtonClick}>
            Cancel
          </CancelButton>
        </ModalBox>
      </InfoWindow>
    );
  }
}

export default AddNoteModal;
