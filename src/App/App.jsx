import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Components/navbar";
import CurrencyConverter from "../Components/currency-converter";
import CurrencyList from "../Components/currency-list";
import CurrencyTable from "../Components/currency-table";

const App = () => {
  return (
    <div style={{ backgroundColor: "green", height: "100vh" }}>
      <NavBar />
      <h1 className="text-green-100">Currency converter</h1>
      <CurrencyConverter />
      <CurrencyTable />
      {/* <CurrencyList /> */}
    </div>
  );
};

export default App;
