import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
Chart.register(...registerables);
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);

  const fetchCurrency = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setCurrencies(response);
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

  const chartData = Object.values(currencies);

  const data = {
    labels: [
      "2017 Q1",
      "2017 Q3",
      "2018 Q1",
      "2018 Q3",
      "2019 Q1",
      "2019 Q3",
      "2020 Q1",
      "2020 Q3",
      "2021 Q1",
      "2021 Q3",
      "2022 Q1",
    ],
    datasets: [
      {
        label: "Currencies",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData,
      },
    ],
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
          <Col>
            <Line datasetIdKey="id" data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurrencyList;
