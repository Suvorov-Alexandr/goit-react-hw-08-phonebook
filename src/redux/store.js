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
import { rootReducers } from "./reducers";

// const LS_KEY = "contacts";
const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
const persistor = persistStore(store);

export { store, persistor };
