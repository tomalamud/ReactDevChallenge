import { call, put } from "redux-saga/effects";
import { getCredentials } from "../../ducks/credentials";
import { setUser } from "../../ducks/userToken";
import { requestGetUser } from "../requests/userToken";

export function* handleGetUser() {
  try {
    const credentials = yield call(getCredentials);
    const response = yield call(requestGetUser(credentials));
    const { data } = response;
    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}
