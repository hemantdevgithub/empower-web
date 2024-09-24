import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import baseApi from "./features/api/baseApi";
import { authReducer } from "./features/auth/authSlice";
import { professionalStepperReducer } from "./features/createOpportunity/professional/professionalStepperSlice";
import { filtersReducer } from "./features/filters/filters.slice";
import { myPostReducer } from "./features/myPost/myPost.slice";
import navSlice from "./features/navbar/navSlice";
import { modalReducer } from "./features/modal/modalSlice";
const persistConfig = {
  key: "auth",
  storage,
};

const persistAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    nav: navSlice,
    auth: persistAuth,
    filters: filtersReducer,
    modal: modalReducer,
    professionalStepper: professionalStepperReducer,
    myPost: myPostReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }).concat(baseApi.middleware),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
