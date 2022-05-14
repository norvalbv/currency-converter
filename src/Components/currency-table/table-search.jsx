import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrencies, updateCurrencies } from "../../Redux/currency";

const TableSearch = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);

    const filterBy = (str) =>
      Object.entries(conversionRates).filter((item) =>
        new RegExp("^" + str.replace(/\*/g, ".*") + "$").test(item[0])
      );

    const filtered = filterBy(e.target.value);
    if (!e.target.value) {
      dispatch(fetchCurrencies());
    } else {
      dispatch(updateCurrencies(filtered));
    }
  };
  return (
    <input
      type="text"
      placeholder="Filter Table  Conversions"
      value={search}
      onChange={handleChange}
      className="bg-gray-500 rounded-t focus:outline-0"
    />
  );
};

export default TableSearch;
