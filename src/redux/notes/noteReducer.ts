import { ADD_NOTE } from "./noteTypes";

import {noteInterface, notesState} from '../../components/typescriptInterfaces'



const initialState: notesState = {
  notes: []
};

type Action = { type: string; payload: string };

export const noteReducer = (
  state: notesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    default:
      return state;
  }
};
