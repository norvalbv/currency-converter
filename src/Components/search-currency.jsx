import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrencies } from "../Redux/currency";
import { useDebounce } from "use-debounce";

const SearchCurrency = () => {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  useEffect(() => {
    console.log(value);
    // dispatch(fetchCurrencies(search));
  }, [value]);
  return (
    <input
      type="text"
      placeholder="search currency"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchCurrency;
