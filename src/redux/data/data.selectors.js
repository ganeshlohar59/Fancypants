import { createSelector } from "reselect";

// Memoize
import memoize from "lodash.memoize";

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
  (shopData) =>
    shopData ? Object.keys(shopData).map((key) => shopData[key]) : []
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectShopData], (shopData) =>
    shopData ? shopData[categoryUrlParam] : null
  )
);

export const selectIsShopDataFetching = createSelector(
  [selectData],
  (data) => data.isFetching
);

export const selectIsShopDataLoaded = createSelector(
  [selectData],
  (data) => !!data.shopData
);
