import { createSelector } from 'reselect';

import { trimmedUserDisplayName } from './user.utils'

//state.user
const selectUser = state => state.user

//state.user.currentUser
export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);

//state.user.currentUser.displayName
export const selectUserDisplayName = createSelector(
	[selectCurrentUser],
	(currentUser) => currentUser ? trimmedUserDisplayName(currentUser.displayName) : null
);