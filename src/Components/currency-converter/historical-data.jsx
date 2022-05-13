import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
Chart.register(...registerables);

const HistoricalData = () => {
  const labels = [
    "2012 Q1",
    "2013 Q1",
    "2014 Q1",
    "2015 Q1",
    "2016 Q1",
    "2017 Q1",
    "2018 Q1",
    "2019 Q1",
    "2020 Q1",
    "2021 Q1",
  ];

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    // Although this is an EXTREMELY ineffiecent way of fetching data
    // I have done it this way because the API used does not support historical time-series currency conversions
    // All the APIs I found that do support it are paid for. The API used was a free demo.
    const fetchData = async () => {
      let year = 2017;

      for (const i = 0; i < labels.length - 1; i++) {
        const data = await fetch(
          `https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc/history/USD/${year}/1/1`,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
          }
        );
        const response = await data.json();
        console.log(response);
        setFetchedData(response, ...fetchedData);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: labels,
    datasets: [{ data: fetchedData, label: "Historical Data" }],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div className="h-full">
      <Line data={data} width={100} height={50} options={options} />
    </div>
  );
};

export default HistoricalData;
