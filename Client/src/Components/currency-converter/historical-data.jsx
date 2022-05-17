import React, { useEffect, useState } from "react";
import Loading from "../loading";
import LineChart from "../line-chars";
import { useSelector } from "react-redux";

const HistoricalData = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("GBP");

  const { currencies } = useSelector((state) => state.currencies);
  console.log(currencies);

  const years = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];

  // Although this is an extremely ineffiecent way of fetching data
  // I have done it this way because the API used does not support historical time-series currency conversions
  // All the APIs I found that do support it are paid for. The API used was a free demo.

  useEffect(() => {
    const fetchData = async () => {
      let year = 2012;

      if (currencyList.length >= years.length) setCurrencyList([]);
      for (let i = 0; i <= years.length; i++) {
        const data = await fetch(
          `http://localhost:5000/historical-data/${currencyFrom}/${year}`
        );
        const response = await data.json();
        year++;
        setCurrencyList((prev) => [...prev, response.conversion_rates]);
      }
    };
    fetchData();
  }, [currencyFrom]);

  if (currencyList.length === 0) return <Loading />;

  return (
    <div className="h-52">
      <div className="flex gap-4">
        <select
          placeholder="Search Currency From"
          onChange={(e) => setCurrencyFrom(e.target.value)}
          className="text-slate-500 w-2/4 h-10 mx-auto block my-6 rounded text-center shadow-2xl shadow-emerald-500 focus:text-gray"
        >
          {Object.entries(currencies.conversion_rates).map((item, i) => (
            <React.Fragment key={i}>
              <option value={item[0]}>{item[0]}</option>
            </React.Fragment>
          ))}
        </select>
        <select
          placeholder="Search Currency From"
          onChange={(e) => setCurrencyTo(e.target.value)}
          className="text-slate-500 w-2/4 h-10 mx-auto block my-6 rounded text-center shadow-2xl shadow-emerald-500 focus:text-gray"
        >
          {Object.entries(currencies.conversion_rates).map((item, i) => (
            <React.Fragment key={i}>
              <option value={item[0]}>{item[0]}</option>
            </React.Fragment>
          ))}
        </select>
      </div>
      <LineChart
        currencies={currencyList}
        years={years}
        currencyFrom={currencyFrom}
        currencyTo={currencyTo}
      />
    </div>
  );
};

export default HistoricalData;
