const selectCurrentUser = (state) => state.auth.user;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export { selectCurrentUser, getIsLoggedIn };
