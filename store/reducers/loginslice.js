import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../services/api";

const initialState = {
  userName: '',
  password:''
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        return {
          ...state,
          login: action.payload,
        };
      })
      .addCase(fetchData.rejected, (state, action) => {
        return {
          ...state,
          error: action.error,
        };
      });
  },
});

export const {} = loginSlice.actions;

export default loginSlice;

