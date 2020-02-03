import { createSelector } from 'reselect';

//state.user
const selectUser = state => state.user

//state.user.currentUser
export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);