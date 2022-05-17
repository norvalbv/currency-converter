import { Line } from "react-chartjs-2";
import { Chart, registerables, Filler } from "chart.js";
import Loading from "../../loading";
Chart.register(...registerables, Filler);

const LineChart = ({ currencies, years, currencyFrom, currencyTo }) => {
  const amounts = currencies.map((item) => item[currencyTo]);

  if (amounts.length < 10 || !currencyTo) return <Loading />;

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
