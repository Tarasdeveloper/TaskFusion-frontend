export const selectUser = (state) => state.auth.userData;
export const selectIsUpdating = (state) => state.auth.isUpdating;
export const selectIsLoadingStatus = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectToken = (state) => state.auth.token;
export const selectAuthenticationStatus = (state) =>
  state.auth.isAuthentificated;
export const selectRefreshingStatus = (state) => state.auth.isRefreshing;
export const selectRegisteredStatus = (state) => state.auth.isRegistered;
