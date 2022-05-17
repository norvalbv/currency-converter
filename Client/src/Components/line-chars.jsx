import { Line } from "react-chartjs-2";
import { Chart, registerables, Filler } from "chart.js";
import { useEffect, useState } from "react";
import Loading from "./loading";
Chart.register(...registerables, Filler);

const LineChart = ({
  indexed,
  currencies,
  years,
  currencyFrom,
  currencyTo,
}) => {
  if (!currencyTo) return <Loading />;

  // console.log(
  //   currencies.map((item) => item["AUD"]),
  //   "Currencies"
  // );

  const amounts = currencies.map((item) => item[currencyTo || indexed]);

  // const chartData = Object.values(currencies);

  // console.log(chartData);
  // const [chartValues, setChartValues] = useState(amounts);

  // useEffect(() => {
  //   setChartValues((prev) => [...prev, chartData]);
  // }, [chartData]);

  // console.log(chartValues, "Chart values");
  if (amounts.length < 10) return <Loading />;

  const data = {
    labels: years,
    datasets: [
      {
        data: amounts,
        label: `Conversion Rates For ${currencyFrom}/${currencyTo}`,
        fill: true,
        borderColor: "rgba(200, 150, 150, 1)",
        backgroundColor: "rgba(200, 10, 100, 0.25)",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line height={100} width={50} data={data} options={options} />;
};

export default LineChart;
