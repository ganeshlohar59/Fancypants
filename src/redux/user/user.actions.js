import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// Google Signin Actions
export function googleSignInStart() {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
}

export function googleSignInSucess(user) {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
}

export function googleSignInFailure(error) {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error,
  };
}

// Email and Password Signin Actions
export function emailSignInStart(emailAndPassword) {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
}

export function emailSignInSucess(user) {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  };
}

export function emailSignInFailure(error) {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
}
