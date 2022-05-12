import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "../Redux/currency";

const store = configureStore({
  reducer: { currencies: currenciesReducer },
});

export default store;
