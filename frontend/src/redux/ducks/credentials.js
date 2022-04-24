export const GET_CREDENTIALS = "GET_CREDENTIALS";
const SET_CREDENTIALS = "SET_CREDENTIALS";

export const getCredentials = () => ({
  type: GET_CREDENTIALS
});

export const setCredentials = () => ({
  type: SET_CREDENTIALS
});

const initialState = {
  email: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      const { userCredentials } = action;
      return { ...state, userCredentials };
    case GET_CREDENTIALS:
      return state;
    default:
      return state;
  }
};
