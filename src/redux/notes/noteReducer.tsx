import {ADD_NOTE, TOGGLE_MODAL} from './noteTypes'

 export interface NotesState{
    notes: string[],
    showModal: boolean
}

const initialState = {
    notes: [""],
    showModal: false
}

type Action = {type: string, payload: string}

export const noteReducer = (state:NotesState = initialState, action:Action)  => {
    
    switch(action.type){
        case ADD_NOTE: return{
            ...state,
            notes: [...state.notes, action.payload]        
        }
        case TOGGLE_MODAL: return{
            ...state,
            showModal: !state.showModal
        }
        default: 
            return state;
    }
}

