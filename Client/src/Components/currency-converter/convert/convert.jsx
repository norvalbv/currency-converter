import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import currency, { fetchCurrencies } from "../../../Redux/currency";
import Loading from "../../loading";
import ConvertInputs from "./convert-inputs";

const Convert = () => {
  // const [currencies, setCurrencies] = useState([]);
  // const [conversionRates, setConversionRates] = useState([]);

  // const fetchCurrency = async () => {
  //   const data = await fetch("data.json");
  //   const response = await data.json();
  //   setCurrencies(response);
  //   setConversionRates(response.conversion_rates);
  // };

  // useEffect(() => {
  //   dispatch(fetchCurrencies());
  // }, []);

  const { currencies } = useSelector((state) => state.currencies);

  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [converted, setConverted] = useState(null);
  const [err, setErr] = useState(false);

  const handleSubmit = async () => {
    if (!currencyFrom || !currencyTo || currencies.conversion_rates.length <= 0)
      return;
    if (!amount) {
      setErr(true);
      return;
    }
    setErr(false);

    // const response = await fetch(
    //   `/currencies/${currencyFrom}/${currencyTo}/${amount}`
    // );

    try {
      const response = await fetch(
        `http://localhost:5000/currencies/${currencyFrom}/${currencyTo}/${amount}`
      );
      const data = await response.json();
      console.log(data);
      setConverted(data.conversion_result);
    } catch (err) {
      console.error(err);
    }
  };

  if (currencies.length === 0) return <Loading />;

  return (
    <>
      <div className="flex justify-center items-center h-40 gap-10">
        <div className="">
          <p>Amount</p>
          <input
            className="w-64 h-10 mx-auto block my-6 rounded px-4 shadow-2xl shadow-emerald-500"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setConverted(null);
            }}
          />
        </div>
        <ConvertInputs
          setCurrencyFrom={setCurrencyFrom}
          setCurrencyTo={setCurrencyTo}
          setConverted={setConverted}
          currencies={currencies}
        />
        <button
          onClick={handleSubmit}
          className="w-32 h-10 my-6 rounded text-center bg-white relative top-3 hover:bg-slate-500 shadow-2xl shadow-emerald-500"
        >
          Convert
        </button>
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
