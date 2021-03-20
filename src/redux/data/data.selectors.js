import { createSelector } from "reselect";

// Memoize
import memoize from "lodash.memoize";

const CATEGORY_ID_MAP = {
  mens: 1,
  womens: 2,
  kids: 3,
  homeandliving: 4,
};

const selectData = (state) => state.data;

export const selectDataCategories = createSelector(
  [selectData],
  (data) => data.categories
);

export const selectShopData = createSelector(
  [selectData],
  (data) => data.shopData
);

export const selectShopDataForPreview = createSelector(
  [selectShopData],
  (shopData) => Object.keys(shopData).map((key) => shopData[key])
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectShopData], (shopData) => shopData[categoryUrlParam])
);
