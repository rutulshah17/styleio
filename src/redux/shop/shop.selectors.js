import { createSelector } from 'reselect';

//state.shop
const selectShop = state => state.shop;

//state.shop.collections
export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

//state.shop.collections.collectionId
export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
);