export const GET_USER_TOKEN = "GET_USER_TOKEN";
const SET_USER_TOKEN = "SET_USER_TOKEN";

export const getUser = () => ({
  type: GET_USER_TOKEN
});

export const setUser = (user) => ({
  type: SET_USER_TOKEN
});

const initialState = {
  userToken: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      const { userToken } = action;
      return { ...state, userToken };
    default:
      return state;
  }
};
