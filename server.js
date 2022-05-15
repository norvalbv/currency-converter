const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const axios = require("axios");
require("dotenv").config();
const fetch = require("node-fetch");

app.use(cors());

// server set up as part for CORS proxy

app.get("/currencies/:from/:to/:amount", async (req, res) => {
  const { from, to, amount } = req.params;
  console.log(from, to, amount);

  try {
    // axios
    //   .get(
    //     `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`
    //   )
    //   .then((data) => {
    //     console.log(data);
    //     res.status(200).send(data);
    //   })
    //   .catch((err) => res.send(err));
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

// can always try AXIOS to fetch the data...

app.get("histoical-data", async (req, res) => {
  const { year } = req.params;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc/history/USD/${year}/1/1`
    );
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`);
});
