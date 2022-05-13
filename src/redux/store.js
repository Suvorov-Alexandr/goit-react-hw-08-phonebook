import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filter } from "./reducers";
import { contactsApi } from "./contactsApi";
import authReducer from "./auth/authSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(persistAuthConfig, authReducer),
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
const persistor = persistStore(store);

export { store, persistor };
