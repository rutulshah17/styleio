//this will consist of every other reducer (state)

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers( {

	user: userReducer,
	cart: cartReducer

});