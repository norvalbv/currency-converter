import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base =
  "https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc/latest";

const base2 = "../data.json";
export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchAllCurrencies",
  async (currency1 = "USD", currency2) => {
    const response = await fetch(`${base2}/${currency1}`);
    const data = await response.json();
    return data;
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: { currencies: [], status: "idle" },
  reducers: {},
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

export default currenciesSlice.reducer;
