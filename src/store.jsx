
import {combineReducers,configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SignupSlice} from './features/auth/signupSlice'
import { loginSlice} from './features/auth/loginSlice'
import authSlice from "./features/auth/authSLice";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'],
}


const persistedReducer = persistReducer(persistConfig, combineReducers({
    signup: SignupSlice.reducer,
    login: loginSlice.reducer,

  }));

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    devTools: true,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })

});


const persistor = persistStore(store);

export { store, persistor };