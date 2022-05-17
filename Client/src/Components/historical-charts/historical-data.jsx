import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LineChart from "../line-chars";
import Loading from "../loading";

const HistoricalData = () => {
  const [currencies, setCurrencies] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      let year = 2012;
      let currency = "USD";
      for (let i = 0; i < years.length; i++) {
        const data = await fetch(
          `http://localhost:5000/historical-data/${currency}/${year}`
        );
        const response = await data.json();
        year++;
        setCurrencies([response.conversion_rates, ...currencies]);
      }
    };
    fetchData();
  }, []);

  if (currencies.length === 0) return <Loading />;

  return (
    <div id="#historical-data">
      <Container>
        <Row>
          <Col>
            <LineChart indexed={"GBP"} currencies={currencies} years={years} />
          </Col>
          <Col>
            <LineChart indexed={"CAD"} currencies={currencies} years={years} />
          </Col>
          <Col>
            <LineChart indexed={"AUD"} currencies={currencies} years={years} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LineChart indexed={"EUR"} currencies={currencies} years={years} />
          </Col>
          <Col>
            <LineChart indexed={"USD"} currencies={currencies} years={years} />
          </Col>
          <Col>
            <LineChart indexed={"CHF"} currencies={currencies} years={years} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HistoricalData;
