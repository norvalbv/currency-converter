import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const CurrencyTable = () => {
  const [currencies, setCurrencies] = useState([]);
  const [conversionRates, setConversionRates] = useState([]);

  const fetchCurrency = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setCurrencies(response);
    setConversionRates(response.conversion_rates);
    console.log(response);
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  //   console.log(Object.entries(conversionRates));

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log(Object.keys(conversionRates));
    const filterBy = (str) =>
      Object.entries(conversionRates).filter((item) =>
        new RegExp("^" + str.replace(/\*/g, ".*") + "$").test(item[0])
      );
    console.log();
    setSearch(e.target.value);
    setConversionRates(filterBy(`*${e.target.value.toUpperCase()}*`));
  };

  const [loadStart, setLoadStart] = useState(0);
  const [loadEnd, setLoadEnd] = useState(15);

  const handleDecrease = () => {
    if (loadStart <= 0) return;
    setLoadStart(loadStart - 15);
    setLoadEnd(loadEnd - 15);
  };

  const handleIncrease = () => {
    if (loadEnd >= conversionRates.length / 161) return;

    setLoadStart(loadStart + 15);
    setLoadEnd(loadEnd + 15);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search conversion"
        value={search}
        onChange={handleChange}
      />
      <Table
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        style={{ width: "50%" }}
      >
        <thead>
          <tr>
            <th>{currencies.base_code}</th>
            <th>Conversion Rate</th>
          </tr>
        </thead>
        {Object.entries(conversionRates)
          .slice(loadStart, loadEnd)
          .map((item, i) => (
            <tbody key={i}>
              <tr>
                <td>1</td>
                <td>
                  {item[0]} {item[1]}
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

export default CurrencyTable;
