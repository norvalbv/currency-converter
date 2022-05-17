<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Currency Converter</h3>

  <p align="center">
    <br />
    <a href="https://github.com/norvalbv/know-your-code/issues">Report Bug</a>
  </p>
  <p>Version: 0.9</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

_Currency Converter_ is a simple currency converter which enables you to convert any currency from one to another. There is also historical data represented within the application.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Front end:

- [React.js](https://reactjs.org/)
- [Redux ToolKit](https://redux-toolkit.js.org/)
- [TailWindCSS](https://tailwindcss.com/)

Back end:

- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Installation

If you wish to clone the project and run locally please view the following:

1. Clone the repo
   ```sh
   git clone https://github.com/norvalbv/currency-converter
   ```
2. Install NPM packages in client (access via: `cd client` in root folder) folder **and** root folder.
   ```sh
   npm install
   ```
3. Start servers by running:
   ```js
   npm run runDev
   ```
   in the root folder **and**
   ```js
   npm run dev
   ```
   in client folder (access via: `cd client` in root folder).

Typically, client will run on port 3000 and server will run on port 5000.

Note: make sure your ENV file contains an API key which you can get [here](https://app.exchangerate-api.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
