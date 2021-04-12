import { all, call } from "redux-saga/effects";

// Sagas
import { startFetchingShopData } from "./data/data.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(startFetchingShopData), call(userSagas)]);
}
