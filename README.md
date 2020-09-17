# LeagueTheoryCrafter

Used for theory crafting item builds and rune configurations as an approximation of the practice tool. This allows quick switching of champions and items without having to go on the client for every champion.

## Built with 
* [MongoDB](https://www.mongodb.com/)* - Storing data for items, champions, and runes used through in the application.
* [Express](https://expressjs.com/) - Serving the API endpoints used for schedulers and data.
* [Angular 10.1.2](https://angular.io/) - Frontend framework for user flow.
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime environment for Express and Angular.
* [nginx](https://nginx.org/en/#basic_http_features) -  Web server for delivering application content.
* [Python 3](https://docs.python.org/3/) - Scripting and web scraping for up to date data.

\*Note: MongoDB might not be required. We can store the data on S3 or directly on our server since data is JSON and it's just the way data is organized.
## Getting Started
You will need [Node.js](https://nodejs.org/en/) to run this project, [npm](https://www.npmjs.com/) (which comes with Node.js during installation), and [Angular 10+](https://angular.io/). I will be using [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) in the root and `server` directory to run commands.
1. `npm install -g @angular/cli`
2. `npm install | yarn install`

## Development Server
### Frontend
```
npm run serve | yarn serve
```
### Backend
```
npm run ts-dev | yarn ts-dev
```
### Updating Data using Python
Run them as **modules** instead of **scripts** to prevent module import errors.
```
./venv/Scripts/activate | source venv/bin/activate
cd server/src
python -m items|runes|champions
```

### Key Takeaways for Preason 2021 and Season 11
The item system is getting a complete revamp in October/November 2021. As such, we'll need to adjust the `Item` model according to the way that new item data is presented. Currently, all items include all item base stats, but only a few item passives calculations are included eg. Stinger, Fiendish Codex, Nashor's Tooth, Kindlegem, and a few others.

**Design structure for the new item system**
1. Look at the new structure of items and create a model of the new items in the system for calculation purposes. This must be made in according with the `Champion` model since all services depend on the same structure
2. Use Meraki CDN to get the new item data. This can potentially take a long time, so alternatively, we'll have to use DDragon for the time being
3. Interpret the data and allocate its relevant stats to the new `Item` model
4. Update `services/items.service.ts` according to the model and data changes