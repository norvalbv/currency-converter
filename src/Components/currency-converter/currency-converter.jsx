import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Convert from "./convert";
import HistoricalData from "./historical-data";

const CurrencyConverter = () => {
  return (
    <div className="mx-auto relative bg-gray-500 w-3/4 rounded h-72">
      <Tabs
        defaultActiveKey="Convert"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Convert" title="Convert">
          <Convert />
        </Tab>
        <Tab eventKey="History" title="Historical Data" className="h-52 w-2/3 mx-auto">
          <HistoricalData />
        </Tab>
      </Tabs>
    </div>
  );
};

export default CurrencyConverter;
