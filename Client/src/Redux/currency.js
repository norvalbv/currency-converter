import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base =
  "https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc/latest";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchAllCurrencies",
  async (currency1 = "USD") => {
    const response = await fetch(`${base}/${currency1}`);
    const data = await response.json();
    return data;
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: { currencies: [], status: "idle" },
  reducers: {
    updateCurrencies(state, action) {
      state.currencies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.status = "success";
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const { updateCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
