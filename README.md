# LeagueTheoryCrafter [Discontinued]

https://www.youtube.com/watch?v=BHWbA3TOmaU

Used for theory crafting item builds and rune configurations as an approximation of the practice tool. This allows quick switching of champions and items without having to go on the client for every champion.

## Built with 
* [Express](https://expressjs.com/) - For development - Serving the API endpoints used for schedulers and data.
* [Angular 10.1.2](https://angular.io/) - Frontend framework for user flow.
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime environment for Express and Angular.
* [Python 3](https://docs.python.org/3/) - Scripting and web scraping for up to date data.

## Getting Started
You will need [Node.js](https://nodejs.org/en/) to run this project, [npm](https://www.npmjs.com/) (which comes with Node.js during installation), and [Angular 10+](https://angular.io/). To update data, you will need [Python 3](https://docs.python.org/3/) as well.
1. `git clone https://github.com/vorpal56/league-theory-crafter.git`
2. `cd league-theory-crafter/`
3. `npm install -g @angular/cli && npm install`
4. `pip install -r requirements.txt`

## Development Server
### Frontend
```
npm run serve
```
### Backend
```
npm run ts-dev
```
## Updating Data using Python
All data is provided by the [League of Legends Wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki) and compiled together by [Meraki Analytics](https://github.com/meraki-analytics) in the [`lolstaticdata` repository](https://github.com/meraki-analytics/lolstaticdata). Huge thanks for their amazing work. 

Run the files as **modules** instead of **scripts** to prevent module import errors. 
### Champions
Existing Champions are updated and new Champions are added to the existing list whenever new patch data is available. Assets are scraped on new Champions or when abilities are changed. Running the `champions` module will provide information in the console about which sections were changed such as asset locations, skill ability names, stat changes, and so on.
```
npm run update-champions || cd server/src/ && python -m champions
```
### Items
Items are updated less frequently, but during Preseason 2021, data is updated quite regularly. Items are modelled in a similar way to Champions so that data relationships are easy to map in the application. Item images are hotlinked directly to Data Dragon.
```
npm run update-items || cd server/src/ && python -m items
```
