import * as React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {connect, useDispatch} from 'react-redux';
//import {addNote} from '../redux';
import {Modal, ModalBox, Title, Description, AddButton, CancelButton} from './styled'

import {useSelector} from 'react-redux';
import {NotesState} from '../redux/notes/noteReducer' 



// const mapStateToProps = (state:any) => {
//   return {
//       numOfNotes: state.numOfNotes
//   }
// }

// const mapDispatchToProps = (dispatch:any) => {
//   return {
//       addNote: () => dispatch(addNote("hello"))
//   }
// }

const Maps:React.FC<any> = () => {

  const [note, setNote] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [lat, setLat] = React.useState("")
  const [lng, setLng] = React.useState("")

  const updateNote = (event: any) => {
    setNote(event.target.value)
  }

  const updateLatLng = (event: any) => {
    setLat(event.latLng.lat)
    setLng(event.latLng.lng)
  }  


  const dispatch = useDispatch()

  const addNote = (note:string) => {
    
    return(
      dispatch({type: "ADD_NOTE", payload: note})
    )
    
    }
    const toggleModal = () => {
      
      return(
        dispatch({type: "TOGGLE_MODAL"})
      )
      
    }

  const notes = useSelector<NotesState, NotesState["notes"]>((state => state.notes))

  const showModal = useSelector<NotesState, NotesState["showModal"]>(state => state.showModal)

  

  const onMapsClick = (e: any) => {
    console.log(e.latLng.lat())
    console.log(e.latLng.lng())
    toggleModal()
    updateLatLng(e)
    console.log(notes)

    //this.setState({showModal: true})
    
  }

  const handleAddClick = () => {
    addNote("NOTE")
    toggleModal()
    setNote('')
    //addNote(note)
    //console.log(this.props.notes)
  }

  const handleCancelClick = () => {
    toggleModal()
    setNote('')
  }


    const MyMapComponent = withScriptjs(withGoogleMap((props: any) =>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        onClick={onMapsClick}
      >
        {props.isMarkerShown && <Marker position={{ lat: -20.397, lng: 100.644 }} />}

      </GoogleMap>
    ))

    

    return (
      <div>

        {showModal ? 
        <Modal>
          <ModalBox>
            <h3>Title</h3>
            <Title value={note} onChange={updateNote}>
            </Title><br/><h3>Description</h3>
            <Description  >
            </Description>
            <br />
            <AddButton onClick={handleAddClick}>Add Note</AddButton>
            <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
          </ModalBox>
        </Modal>: null}
        

        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvIy_-SQ-mIdX-olPiudYvSC2b6z7lpuY&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}

        />
      </div>
    )
  

}

export default Maps
//export default connect(mapStateToProps, mapDispatchToProps)(Maps)

