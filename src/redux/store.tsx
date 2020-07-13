import {createStore} from 'redux'
import {noteReducer} from './notes/noteReducer'

const initialState = {
    notes: [""],
    showModal: false
}

const store = createStore(noteReducer)

export default store