import * as React from "react";
import { connect} from "react-redux";

import {AddNoteModalProps } from "./typescriptInterfaces";
import {toggleModal } from "../redux";

import {
  Title,
  Description,
  AddButton,
  CancelButton,
  ModalBox,
} from "./styled";

import { InfoWindow } from "react-google-maps";

class AddNoteModal extends React.Component<AddNoteModalProps, {}> {
  

  render() {
    const {
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
          this.props.toggleModal;
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

const mapStateToProps = (state:any) => ({
  showModal: state.showModal
})

const mapDispatchToProps = (dispatch:any) => ({
  toggleModal: toggleModal
})


export default connect(mapStateToProps,mapDispatchToProps)(AddNoteModal);
