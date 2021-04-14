import { UserActionTypes } from "./user.types";

// Google Signin Actions
export function googleSignInStart() {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
}

// Email and Password Signin Actions
export function emailSignInStart(emailAndPassword) {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
}

export function emailSignUpStart(emailPasswordDisplayName) {
  return {
    type: UserActionTypes.EMAIL_SIGN_UP_START,
    payload: emailPasswordDisplayName,
  };
}

export function signInSucess(user) {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
}

export function signInFailure(error) {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
}

export function checkUserSession() {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
}

export function signOutStart() {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
}

export function signOutSuccess() {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
}

export function signOutFailure(error) {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
}
