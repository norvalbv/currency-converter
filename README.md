<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Know Your Code</h3>

  <p align="center">
    <br />
    <a href="https://github.com/norvalbv/know-your-code/issues">Report Bug</a>
  </p>
  <p>Version: 0.5</p>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

_Know Your Code_ is an ‘advanced cheat sheet’ which outline common general/interview questions and basic syntax. It is essentially an updated version of [W3schools](https://www.w3schools.com/) with a better UI, more languages, frameworks and technologies (which will be implemented in due course).

Here's the benefits for Know Your Code compared to other 'cheat sheets':

- The project is open sourced.
- The project outlines interview/general questions about technologies and syntax-styled questions.

Of course, the project _is_ in early stages and therefore you may experience bugs or errors. Please open an issue if you feel the need to so. Also note that more technologies will be added to the topic list in time.

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

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
 -->

### Installation

To view the current live demo please visit: [Here](https://know-your-code.herokuapp.com/)

If you wish to clone the project and run locally please view the following:

1. Clone the repo
   ```sh
   git clone https://github.com/norvalbv/know-your-code
   ```
2. Install NPM packages in client (access via: `cd client` in root folder) folder **and** root folder.
   ```sh
   npm install
   ```
3. Start servers by running:
   ```js
   npm run DevStart
   ```
   in the root folder **and**
   ```js
   npm start
   ```
   in client folder (access via: `cd client` in root folder).

Typically, client will run on port 3000 and server will run on port 5000.

4. You also need to download POSTBIRD, sign up and then sign in. Copy the file data `database.sql` into your POSTBIRD query and click run.

Note: make sure your ENV file connects to your database.

<p align="right">(<a href="#top">back to top</a>)</p>
