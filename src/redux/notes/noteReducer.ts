import { RECIEVE_API_DATA, REQUEST_API_DATA, SET_LAT_LNG, TOGGLE_MODAL} from "./noteActions";

import { NotesState } from "../../components/typescriptInterfaces";

const initialState: NotesState = {
  latLng: {lat: 31.796, lng: 74.0159},
  notes: [],
  showModal: false
};

type Action = { type: string; payload: any };

export const noteReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {

    case SET_LAT_LNG:
      return {...state, latLng: {lat: action.payload.lat, lng: action.payload.lng}};

    case REQUEST_API_DATA:
      return state;

    case RECIEVE_API_DATA:
      if (action.payload.length > 0) {
        return {
          ...state,
          notes: [...state.notes, ...action.payload],
        };
      } else {
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      }
    case TOGGLE_MODAL:
        return {
          ...state,
          showModal: !state.showModal
        }

    default:
      return state;
  }
};
