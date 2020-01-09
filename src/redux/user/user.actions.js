export const setCurrentUser = user => ({
	type: 'SET_CURRENT_USER',
	payload: user
});

export function setCurrentUserDemo(hello) {
	return {
		type: 'SET_CURRENT_USER',
		text: 'hello Rutul',
		payload: hello
	}
}