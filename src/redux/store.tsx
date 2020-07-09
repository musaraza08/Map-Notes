import {createStore} from 'redux'
import noteReducer from './notes/noteReducer'

const initialState = {
    numOfNotes: 0
}


const store = createStore(noteReducer, initialState)

export default store