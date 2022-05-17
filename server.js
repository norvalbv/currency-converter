const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const fetch = require("node-fetch");

app.use(cors());

// server set up as part for CORS proxy

app.get("/currencies/:from/:to/:amount", async (req, res) => {
  const { from, to, amount } = req.params;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/historical-data/:currency/:year", async (req, res) => {
  const { currency = "USD", year } = req.params;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/c870dd6680dafee56f5b15bc/history/${currency}/${year}/1/1`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`);
});
