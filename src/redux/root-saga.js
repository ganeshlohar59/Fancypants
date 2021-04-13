import { all, call } from "redux-saga/effects";

// Sagas
import { dataSagas } from "./data/data.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(dataSagas), call(userSagas), call(cartSagas)]);
}
