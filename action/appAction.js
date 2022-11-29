import { SET_DAYS, SIGNED_IN, SIGNED_OUT,USER_DATA } from "./types";

export const handleSetDays = (days) => async (dispatch) => {
  return dispatch({
    type: SET_DAYS,
    payload: days,
  });
};

export const signin = () => ({
  type: SIGNED_IN,
  payload: true,
});

export const signout = () => ({
  type: SIGNED_OUT,
  payload: false,
});
export const userData = (data) => ({
  type: USER_DATA,
  payload: data,
});