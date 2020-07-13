import {ADD_NOTE} from './noteTypes'
import {TOGGLE_MODAL} from './noteTypes'

export const addNote = (note:any) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}

export const toggleModal = (note:any) => {
    return {
        type: TOGGLE_MODAL
    }
}