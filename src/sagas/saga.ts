import { takeLatest, put, call, all } from "redux-saga/effects";
import { toggleModal } from "../redux";
import { store } from "react-notifications-component";
import {validationFailed, noteAdded} from "../components/notifications";

import {
  REQUEST_API_DATA,
  ADD_NOTE,
  recieveApiData,
} from "../redux/notes/noteActions";
import { fetchData, postData } from "./api";

//WORKER SAGAS
function* getApiData() {
  try {
    const data = yield call(fetchData);
    console.log("Notes Retrieved from Server: ", data);
    data.length > 0 ? yield put(recieveApiData(data)) : null;
  } catch (e) {
    console.log(e);
  }
}

function* postApiData(note: any) {
  
  try {
    const data = yield call(postData, note.payload);
    if (data == "err") {
      console.log("Error");
      store.addNotification(validationFailed);
    } else {
      console.log("Note added to Server: ", data);
      yield put(recieveApiData(data));
      yield put(toggleModal());
      store.addNotification(noteAdded);
      
    }
  } catch (e) {
    console.log(e);
  }
}

//WATCER SAGAS
export function* watchRequestApiData() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export function* watchAddNote() {
  yield takeLatest(ADD_NOTE, postApiData);
}

//ROOT SAGA
export function* rootSaga() {
  yield all([watchRequestApiData(), watchAddNote()]);
}
