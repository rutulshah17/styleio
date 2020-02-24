import { createSelector } from 'reselect';

//state.shop
const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);