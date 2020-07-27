import { createStore, applyMiddleware} from "redux";
import { noteReducer } from "./notes/noteReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(noteReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
