# <Modeling Website>

## Description

This project is a react app website for a freelance model to display photos and work. The client wanted to be able to achieve the following:
- List stats
- Demonstrate both editorial and commerical work
- Allow potential employers or collaborators to get in touch via email
- Link to social media

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

This is a front-end React app project. To set up the environment, I installed the following technologies:

- Node.js: installed using the nvm (Node Version Manager) https://nodejs.org/en/download/package-manager#nvm
- React: https://react.dev/learn/start-a-new-react-project

A folder structure was set up under "src" to create a navigation bar and the following components: navigation bar, images and pages. The pages folder houses the home page (with the model stats), commerical photos, editorial photos, contact form to email the client, and link to social media account.

To start the development environment, the following terminal commands were used:
- npm run build
- npm start

## Usage

On the home page, you notice the client's name at the top, with a simple navigation bar below. If you click through the navigation bar you are taken to the various pages:

- "Home" allows you to see a feature photo of the client and the stats
- "Commercial" allows you to view the client's commercial work
- "Editorial" allows you to view the client's editorial work
- "Contact" allows you to send an email form to the client to get in touch
- "Instagram symbol" will take you to the client's social media page

###To push to AWS
```bash
pwd
cd my-app
./helpers/upload-website.sh
```

## License

This project is licensed under the terms of the MIT license.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)