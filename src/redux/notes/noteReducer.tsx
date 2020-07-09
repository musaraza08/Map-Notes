import {ADD_NOTE} from './noteTypes'

const initialState = {
    numOfNotes: 0
}

const noteReducer = (state = initialState, action:any)  => {
    switch(action.type){
        case ADD_NOTE: return{
            ...state,
            numOfNotes: state.numOfNotes + 1
        }
    }
}

export default noteReducer