import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

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
    collections => collections.find( 
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] 
    )
);