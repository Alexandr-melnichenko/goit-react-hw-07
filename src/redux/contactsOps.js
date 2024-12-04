import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67500fc169dc1669ec197ded.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

// addContact;
// deleteContact;
// try...catch
// thunkAPI.rejectWithValue

// extraReducers
