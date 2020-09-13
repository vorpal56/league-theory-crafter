# LeagueTheoryCrafter

Used for theory crafting item builds and rune configurations as an approximation of the practice tool. This allows quick switching of champions and items without having to go on the client for every champion.

## Built with 
* [MongoDB](https://www.mongodb.com/) - Storing data for items, champions, and runes used through in the application.
* [Express](https://expressjs.com/) - Serving the API endpoints used for schedulers and data.
* [Angular 9.1.1](https://angular.io/) - Frontend framework for user flow.
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime environment for Express and Angular.
* [nginx](https://nginx.org/en/#basic_http_features) -  Web server for delivering application content.
* [Python 3](https://docs.python.org/3/) - Scripting and web scraping for up to date data.

## Getting Started
You will need [Node.js](https://nodejs.org/en/) to run this project, [npm](https://www.npmjs.com/) (which comes with Node.js during installation), and [Angular 9+](https://angular.io/). I will be using [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) as the package manager in the root and `server` directory.
1. `npm install -g @angular/cli`
2. `yarn add yarn.lock | package.json` **OR**
3. `npm install package.json`

## Development Server
### Frontend
```
yarn serve
```
### Backend
```
cd server/
yarn ts-dev
```
### Updating Data using Python
Run them as **modules** instead of **scripts** to prevent module import errors.
```
./venv/Scripts/activate | source venv/bin/activate
cd server/src
python -m items | runes | champions
```


