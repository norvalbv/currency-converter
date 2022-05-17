import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../Redux/currency";
import { useDebounce } from "use-debounce";
import Loading from "./loading";

const SearchCurrency = () => {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 750);

  const dispatch = useDispatch();

  const { currencies } = useSelector((state) => state.currencies);

  // refetches currencies after initial render once data is typed in...
  // initial if statement will return false on mounting due to the delay in fetching of data.
  useEffect(() => {
    if (currencies.length === 0) return;

    if (
      Object.keys(currencies.conversion_rates).find(
        (e) => e.toLowerCase() === search.toLowerCase()
      )
    ) {
      if (search) {
        dispatch(fetchCurrencies(search));
      } else {
        dispatch(fetchCurrencies());
      }
    }
  }, [value]);

  // fetches currencies on initial render
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  if (currencies.length === 0) return <Loading />;

  return (
    <>
      <input
        type="text"
        list="currencies"
        className="w-72 h-10 mx-auto block my-20 rounded text-center shadow-xl shadow-emerald-400"
        placeholder="Search Currency"
        onChange={(e) => setSearch(e.target.value)}
      />
      <datalist id="currencies">
        {Object.entries(currencies.conversion_rates).map((item, i) => (
          <option value={item[0]} key={i}>
            {item[0]}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default SearchCurrency;
