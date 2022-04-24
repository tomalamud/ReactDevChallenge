import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./ducks/userToken";
import credentialsReducer from "./ducks/credentials";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware /* acá van los otros middleware como redux-logger */
];

const store = configureStore({
  reducer: {
    user: userReducer,
    credentials: credentialsReducer,
  }, 
  middleware,
});

sagaMiddleware.run(watcherSaga);

export default store;