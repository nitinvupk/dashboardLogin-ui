import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("login/fetchData", async () => {
  const response = await axios.get('https://mocki.io/v1/2fd73d02-34d1-4f26-a54b-e80a28f3917a')
  return response.data.user
});