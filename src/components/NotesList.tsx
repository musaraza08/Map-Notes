import * as React from "react";
import {useSelector} from 'react-redux';
import {NotesState} from '../redux/notes/noteReducer' 
import {NoteButton} from './styled'

const NotesList:React.FC = () => {

    const notes = useSelector<NotesState, NotesState["notes"]>((state => state.notes))
    
    const NotesMapper = () => (
        notes.map((note:any) => (
            <NoteButton >{note.title}</NoteButton>
         ))
    )
    return (
        <>
                 {
                     NotesMapper()
                 }             
        </>
    )
}

export default NotesList

