//this will consist of every other reducer (state)

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers( {
	user: userReducer
} );