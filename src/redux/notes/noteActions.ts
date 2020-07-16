import { ADD_NOTE } from "./noteTypes";
import {noteInterface} from '../../components/typescriptInterfaces'

export const addNote = (payload: noteInterface) => ({ type: ADD_NOTE, payload: payload });
