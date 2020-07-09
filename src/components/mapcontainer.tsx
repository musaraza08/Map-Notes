import * as React from "react";
//import Maps from './Maps';

import {connect} from 'react-redux';

import {addNote} from '../redux';



function MapContainer (props:any) {
    return (
      <div>
        <h2>Number of Notes - {props.numOfNotes} </h2>
        <button onClick={props.addNote}>Add Note</button>
      </div>
    )
  }


const mapStateToProps = (state:any) => {
    return {
        numOfNotes: state.numOfNotes
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        addNote: () => dispatch(addNote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
