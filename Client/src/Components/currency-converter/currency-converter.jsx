import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Convert from "./convert/convert";
import HistoricalData from "./historical-chart/historical-data";

const CurrencyConverter = () => {
  return (
    <div
      id="currency-converter"
      className="mx-auto relative bg-slate-300 w-3/4 rounded h-full font-bold h-96"
    >
      <Tabs
        defaultActiveKey="Convert"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Convert" title="Convert">
          <Convert />
        </Tab>
        <Tab
          eventKey="History"
          title="Historical Data"
          className="h-52 w-2/3 mx-auto text-white"
        >
          <HistoricalData />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CurrencyConverter;
