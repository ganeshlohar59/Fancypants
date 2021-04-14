import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSucess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfile, user, user.displayName);
    const userSnapshot = yield userRef.get();
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailPasswordSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailPassword
  );
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* createUserWithEmailPassword({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const newUser = { displayName, ...user };
    yield getSnapshotFromUserAuth(newUser);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCreateUserWithEmailPasswordStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_UP_START,
    createUserWithEmailPassword
  );
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailPasswordSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onCreateUserWithEmailPasswordStart),
  ]);
}
