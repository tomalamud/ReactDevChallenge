import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/userToken";
import { GET_USER_TOKEN } from "../ducks/userToken";

export function* watcherSaga() {
  yield takeLatest(GET_USER_TOKEN, handleGetUser);
}
