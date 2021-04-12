// Actions
import DataActionTypes from "./data.types";

// Firebase
// import {
//   firestore,
//   convertCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";

export const fetchShopDataStart = () => ({
  type: DataActionTypes.FETCH_SHOP_DATA_START,
});

export const fetchShopDataSuccess = (shopDataMap) => ({
  type: DataActionTypes.FETCH_SHOP_DATA_SUCCESS,
  payload: shopDataMap,
});

export const fetchShopDataFailure = (error) => ({
  type: DataActionTypes.FETCH_SHOP_DATA_FAILURE,
  payload: error,
});

// export const startShopDataFetchAsync = () => {
//   return (dispatch) => {
//     dispatch(fetchShopDataStart());
//     const shopDataRef = firestore.collection("products");

//     // Request to firebase to fetch data
//     shopDataRef
//       .get()
//       .then((snapshot) => {
//         const shopDataMap = convertCollectionSnapshotToMap(snapshot);
//         dispatch(fetchShopDataSuccess(shopDataMap));
//       })
//       .catch((error) => {
//         dispatch(fetchShopDataFailure(error.message));
//       });
//   };
// };
