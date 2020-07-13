import * as React from "react";
import {useSelector} from 'react-redux';
import {NotesState} from '../redux/notes/noteReducer' 

const NotesList:React.FC = () => {
    const notes = useSelector<NotesState, NotesState["notes"]>((state => state.notes))

    return (
        <>
            <ul>
                {notes.map((note) => {
                    <li>Note </li>
                })}
            </ul>
        </>
    )
}

export default NotesList

