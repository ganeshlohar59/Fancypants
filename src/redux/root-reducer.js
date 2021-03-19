import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import dataReducer from "./data/data.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  data: dataReducer,
});

export default persistReducer(persistConfig, rootReducer);
