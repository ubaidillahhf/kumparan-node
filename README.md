<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Issues][issues-shield]](https://img.shields.io/github/issues/ubaidillahhf/kumparan-node)
[![Contributors](https://img.shields.io/badge/contributors-1-green)](https://github.com/ubaidillahhf/kumparan-node/graphs/contributors)
[![MIT License][license-shield]](https://github.com/ubaidillahhf/kumparan-node/blob/master/license.txt)
[![LinkedIn][linkedin-shield]](https://linkedin.com/in/ubaidillahhf)



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ubaidillahhf/kumparan-node">
    <img src="https://github.com/ubaidillahhf/kumparan-node/blob/master/logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">KUMPARAN NODE</h3>

  <p align="center">
    a Simple Technical Test BE Developer with NodeJs by Ubaidillah Hakim Fadly
    <br />
    <br />
    <a href="https://github.com/ubaidillahhf/kumparan-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/ubaidillahhf/kumparan-node/issues">Request Feature</a>
    .
    <a href="https://documenter.getpostman.com/view/4839509/TzzDJuWA"><b>Documentation</b></a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

### Pattern
* CQRS

### Standard Naming Convention
* FOLDER = camelCase
* FILE = snake_case (Ex Migration File)
* FUNCTION = camelCase

### Feature

a Project REST API with NodeJs and Express Framework

Fitur:
* CREATE Article
* GET Article (With Caching, Query based on title or body, Filtering by Author)

Estimated Project Finish is 1 Day

### Built With
Berikut merupakan list teknologi yang digunakan dalam projek ini.
* [NodeJs as Language](https://nodejs.org/en/)
* [Express as Framework](https://expressjs.com/)
* [Sequelize as ORM](https://sequelize.org/)
* [Nodemon as Realtime Change Monitor](https://www.npmjs.com/package/nodemon)
* [MySql as Database](https://www.mysql.com/)
* [Mocha](https://mochajs.org/) and [Chai as Unit and Integration Testing](https://www.chaijs.com/)
* [Docker as Container](https://www.docker.com/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Install NodeJs and Mysql (simple method)

### Installation

1. Clone the repo (in Folder htdocs)
```sh
git clone https://github.com/ubaidillahhf/kumparan-node.git
```
2. Install module with yarn
```sh
yarn install
```
3. Create Database in Mysql Client (DataGrip, Navicat, Sql Workbech or other)
4. Copy .env.example and paste with rename just .env
5. Change .env with your configuration
6. Migrate the database
```sh
yarn db:migrate
```
7. Run the backend
```sh
yarn dev
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ubaidillahhf/kumparan-node/issues) for a list of proposed features (and known issues).


<!-- CONTACT -->
## Contact

Ubaidillahhf - [@ubaidillahhf](https://twitter.com/ubaidillahhf) - ubaidillahhf@gmail.com

Project Link: [https://github.com/ubaidillahhf/kumparan-node](Here)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

- **[MIT license](https://opensource.org/licenses/MIT)**
- Created by <a href="http://ubed.dev" target="_blank">Ubaidillah Hakim Fadly</a> 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/ubaidillahhf/kumparan-node
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/badge/License-MIT-blue
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
