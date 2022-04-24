export const GET_CREDENTIALS = "GET_CREDENTIALS";
const SET_CREDENTIALS = "SET_CREDENTIALS";

export const getCredentials = () => ({
  type: GET_CREDENTIALS
});

export const setCredentials = (email, password) => ({
  type: SET_CREDENTIALS,
  email,
  password,
});

const initialState = {
  email: 'pepito@gmail.com',
  password: 'pepito',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      let { email, password } = action;
      return { ...state, ...email, ...password };
    default:
      return state;
  }
};
