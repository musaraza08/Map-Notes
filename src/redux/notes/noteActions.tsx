import {ADD_NOTE} from './noteTypes'

export const addNote = (note:any) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}
