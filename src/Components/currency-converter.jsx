import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../Redux/currency";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);

  const [amount, setAmount] = useState(0);

  const fetchCurrency = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setCurrencies(response);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    fetchCurrency();
  }, []);

  const i = useSelector((state) => state.currencies.currencies);
  console.log(currencies);

  // basic converter

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Convert" title="Convert">
          <div className="amount">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="from">
            <select name="" id=""></select>
          </div>
          <div className="to">
            <select name="" id=""></select>
          </div>
          <button onClick={() => setResponse(!response)}>Convert</button>

          {currencies && (
            <>
              <p>
                {amount} = {amount}
              </p>
            </>
          )}
        </Tab>
        <Tab eventKey="profile" title="Historical Data"></Tab>
      </Tabs>
    </>
  );
};

export default CurrencyConverter;
