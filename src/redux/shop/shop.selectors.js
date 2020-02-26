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

//state.shop.collections

//Object.keys(collections) => [hats, sneakers, jackets, womens, mens]
//Object.keys(collections).map(key => collections[key]) => 0: {id: 1, title: "Hats", routeName: "hats".....}
//collections => {hats[...], sneakers[...], jackets[...], womens[...], mens[...]}
//key => hats, sneakers,...
//collections[key] => [array-inside-hats/sneakers....] (this array is mapped inside collectionPreview component)
//actual array is 0: {id: 1, title: "Hats", routeName: "hats",.....}....
export const selectCollectionsForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
);