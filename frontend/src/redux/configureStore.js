import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware /* acá van los otros middleware como redux-logger */
];

const store = configureStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;