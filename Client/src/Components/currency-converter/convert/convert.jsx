import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../loading";
import ConvertInputs from "./convert-inputs";

const Convert = () => {
  const { currencies } = useSelector((state) => state.currencies);

  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("GBP");
  const [amount, setAmount] = useState(0);
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

    try {
      const response = await fetch(
        `http://localhost:5000/currencies/${currencyFrom}/${currencyTo}/${amount}`
      );
      const data = await response.json();
      setConverted(data.conversion_result);
    } catch (err) {
      console.error(err);
    }
  };
  if (currencies.length === 0) return <Loading />;

  return (
    <>
      <div className="flex justify-center items-center h-40 gap-10">
        <ConvertInputs
          setCurrencyFrom={setCurrencyFrom}
          setCurrencyTo={setCurrencyTo}
          setConverted={setConverted}
          currencies={currencies}
          setAmount={setAmount}
          amount={amount}
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
          <p className="text-center text-2xl font-semibold text-slate-900">
            {currencyFrom} {amount} = {currencyTo} {converted}
          </p>
        </>
      )}
    </>
  );
};

export default Convert;
