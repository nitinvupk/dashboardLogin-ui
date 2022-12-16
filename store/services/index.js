import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../reducers/loginslice';

export const store = configureStore({
  reducer:{
    login:loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
});

