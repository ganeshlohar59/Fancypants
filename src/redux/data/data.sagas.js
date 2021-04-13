import { all, call, put, takeLatest } from "redux-saga/effects";
import DataActionTypes from "./data.types";

// Firebase
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchShopDataSuccess,
  fetchShopDataFailure,
} from "../data/data.actions";

export function* fetchShopDataAsync() {
  try {
    const shopDataRef = firestore.collection("products");
    const snapshot = yield shopDataRef.get();
    const shopDataMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchShopDataSuccess(shopDataMap));
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

export function* startFetchingShopData() {
  yield takeLatest(DataActionTypes.FETCH_SHOP_DATA_START, fetchShopDataAsync);
}

export function* dataSagas() {
  yield all([call(startFetchingShopData)]);
}
