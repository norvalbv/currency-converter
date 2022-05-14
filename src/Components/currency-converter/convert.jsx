import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import currency, { fetchCurrencies } from "../../Redux/currency";

const Convert = () => {
  const [currencies, setCurrencies] = useState([]);
  const [conversionRates, setConversionRates] = useState([]);

  const fetchCurrency = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setCurrencies(response);
    setConversionRates(response.conversion_rates);
  };

  console.log(Object.entries(conversionRates));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  const i = useSelector((state) => state.currencies.currencies);
  console.log(currencies);

  //

  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [converted, setConverted] = useState(null);
  const [err, setErr] = useState(false);

  const handleSubmit = async () => {
    if (!currencyFrom || !currencyTo || conversionRates.length <= 0) return;
    if (!amount) {
      setErr(true);
      return;
    }
    setErr(false);

    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc
    /pair/${currencyFrom}/${currencyTo}/${amount}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        mode: "no-cors",
      }
    );

    console.log(response);

    const data = await response.json();

    // const from = Object.entries(conversionRates).find(
    //   (ele) => ele[0] === currencyFrom
    // );

    // const to = Object.entries(conversionRates).find(
    //   (ele) => ele[0] === currencyFrom
    // );

    console.log(data);

    // if (from && to) {
    //   setConverted(amount * to[1]);
    // }
  };

  return (
    <>
      <div className="flex justify-center items-center h-40 gap-10">
        <div className="">
          <p>Amount</p>
          <input
            className="w-40 h-6"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setConverted(null);
            }}
          />
        </div>
        <div className="">
          <p>Convert From</p>
          <select
            name=""
            id=""
            className="w-40 h-6"
            onChange={(e) => {
              setCurrencyFrom(e.target.value);
              setConverted(null);
            }}
          >
            {Object.entries(conversionRates).map((item, i) => (
              <option value={item[0]} key={i}>
                {item[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <p>Convert To</p>
          <select
            name=""
            id=""
            className="w-40 h-6"
            onChange={(e) => {
              setCurrencyTo(e.target.value);
              setConverted(null);
            }}
          >
            {Object.entries(conversionRates).map((item, i) => (
              <option value={item[0]} key={i}>
                {item[0]}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit}>Convert</button>
      </div>
      {err && (
        <p className="text-center text-red-800 text-base">
          Please enter a valid amount
        </p>
      )}
      {converted && (
        <>
          <p className="text-center text-2xl font-semibold text-slate-300">
            {currencyFrom} {amount} = {currencyTo} {converted}
          </p>
        </>
      )}
    </>
  );
};

export default Convert;
