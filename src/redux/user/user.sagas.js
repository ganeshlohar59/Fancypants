import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfile,
} from "../../firebase/firebase.utils";

import { googleSignInSucess, googleSignInFailure } from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = call(createUserProfile, user, user.displayName);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSucess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
