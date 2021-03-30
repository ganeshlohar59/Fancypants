// Actions
import DataActionTypes from "./data.types";

export const downloadShopData = (shopDataMap) => ({
  type: DataActionTypes.UPDATE_SHOP_DATA,
  payload: shopDataMap,
});
