//action consist of type and payload

import { UserActionTypes }  from './user.types';

const INITIAL_STATE = {
	currentUser: null
}

//in ES6, if state is ever undefined, it will take state = intial state
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}

		default:
			return state;
	}
}

export default userReducer;