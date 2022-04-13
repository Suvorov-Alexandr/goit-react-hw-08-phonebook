import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filter } from "./reducers";
import { contactsApi } from "./contactsApi";

const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);

export { store };
