import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/userToken";
import store from "../../configureStore";

export function* handleGetUser() {
  const url = 'https://admindev.inceptia.ai/api/v1/login/';
  try {
    const credentials = yield store.getState().credentials;
    console.log(credentials)
    const response = yield call(() => {
      return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }).then(res => res.json())
    });
    console.log(response)
    yield put(setUser(response.token));
  } catch (err) {
    console.log(err);
  }
}
