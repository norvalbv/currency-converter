const ConvertInputs = ({
  setCurrencyFrom,
  setCurrencyTo,
  setConverted,
  currencies,
  setAmount,
  amount,
}) => {
  return (
    <>
      <div>
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
      <div>
        <p>Convert From</p>
        <input
          type="text"
          list="currencyFrom"
          className="w-64 h-10 mx-auto block my-6 rounded text-center shadow-2xl shadow-emerald-500"
          placeholder="Search Currency"
          onChange={(e) => {
            setCurrencyFrom(e.target.value);
            setConverted(null);
          }}
        />
        <datalist id="currencyFrom">
          {Object.entries(currencies.conversion_rates).map((item, i) => (
            <option value={item[0]} key={i}>
              {item[0]}
            </option>
          ))}
        </datalist>
      </div>
      <div>
        <p>Convert To</p>
        <input
          type="text"
          list="currencyTo"
          className="w-64 h-10 mx-auto block my-6 rounded text-center shadow-2xl shadow-emerald-500"
          placeholder="Search Currency"
          onChange={(e) => {
            setCurrencyTo(e.target.value);
            setConverted(null);
          }}
        />
        <datalist id="currencyTo">
          {Object.entries(currencies.conversion_rates).map((item, i) => (
            <option value={item[0]} key={i}>
              {item[0]}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default ConvertInputs;
