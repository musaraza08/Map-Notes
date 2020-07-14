import {ADD_NOTE} from './noteTypes'

 export interface NotesState{
    notes: string[]
}

const initialState:NotesState = {
    notes: []
}

type Action = {type: string, payload: string}

export const noteReducer = (state:NotesState = initialState, action:Action)  => {
    
    switch(action.type){
        case ADD_NOTE: return{
            ...state,
            notes: [...state.notes, action.payload]        
        }
        
        default: 
            return state;
    }
}

