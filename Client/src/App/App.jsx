import "../index.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../Components/navbar";
import CurrencyConverter from "../Components/currency-converter/currency-converter";
import CurrencyList from "../Components/currency-table/currency-list";
import CurrencyTable from "../Components/currency-table/currency-table";
import SearchCurrency from "../Components/search-currency";
import About from "../Components/about";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-stone-300 via-teal-100 to-pink-200 min-h-screen">
      <NavBar />
      <h1 className="text-slate-700 text-center mt-4 underline uppercase text-2xl fw-bolder">
        Currency converter
      </h1>
      <h2 className="text-slate-700 text-center mb-4 text-sm">
        By Benjamin Norval
      </h2>
      <CurrencyConverter />
      <About />
      <SearchCurrency />
      <CurrencyTable />
      {/* <CurrencyList /> */}
    </div>
  );
};

export default App;
