import { createSelector } from "reselect";

const selectData = (state) => state.data;

export const selectDataCategories = createSelector(
  [selectData],
  (data) => data.categories
);

export const selectShopData = createSelector(
  [selectData],
  (data) => data.shopData
);
