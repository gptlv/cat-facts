import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  loading: boolean,
  data: string[],
  error: string,
}

export const getQuote = createAsyncThunk("quote/getQuote", async (_, { rejectWithValue })=> {
    try {
        const axiosResponse = await axios.get("https://meowfacts.herokuapp.com/");
        return axiosResponse.data.data;
    }
    catch (error: any){
        return rejectWithValue(error.message);
    }

})

const initialState: InitialState = {
    loading: false,
    data: [],
    error: "",
}

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuote.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(getQuote.fulfilled, (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = "";
        });
        builder.addCase(getQuote.rejected, (state, action) => {
          state.loading = false;
          state.data = [];
          state.error = action.error.message || 'Something went wrong';
        });
      },
})

export default quoteSlice.reducer;
