# LeagueTheoryCrafter

Used for theory crafting item builds and rune configurations as an approximation of the practice tool. This allows quick switching of champions and items without having to go on the client for every champion.

### Full Modifiers Table for Champions
Read the full table of applicable modifiers for each champion at [CALCULATIONS.md](CALCULATIONS.md)

## Built with 
* [Express](https://expressjs.com/) - For development - Serving the API endpoints used for schedulers and data.
* [Angular 10.1.2](https://angular.io/) - Frontend framework for user flow.
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime environment for Express and Angular.
* [Python 3](https://docs.python.org/3/) - Scripting and web scraping for up to date data.

\*Note: MongoDB might not be required. It's probably easier to store the data on S3 or directly on our server since data is JSON and it's just the way data is organized.
## Getting Started
You will need [Node.js](https://nodejs.org/en/) to run this project, [npm](https://www.npmjs.com/) (which comes with Node.js during installation), and [Angular 10+](https://angular.io/). I will be using [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) in the root directory to run commands.
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
## Updating Champion Data using Python
Run them as **modules** instead of **scripts** to prevent module import errors. Running `champions` will provide information in the logs to reference which sections have been changed like asset locations, skill ability names, stat changes, and so on. Since Running `update-champions` will work on Windows machines, but not others, update `package.json`.
```
./venv/Scripts/activate.bat | source venv/bin/activate
npm run update-champions | yarn update-champions
npm run update-items | yarn update-items
deactivate
```
### Adding new champions
Currently, there isn't an automated step to **add** new champions, but once the base champion data is in `champions.json`, any other missing or ununiform data is added or fixed respectively.
1. go to the [`ChampionData`](https://leagueoflegends.fandom.com/wiki/Module:ChampionData/data?action=edit) on the League of Legends Wiki and find the new champion (eg. Samira)
2. Copy the new `Champion` from the Wiki and remove any unimportant `stats` (eg. `urf`, `ofa`, `nb`, `*_radius`, `utility`, `toughness`, etc.)
3. Paste the new champion anywhere in `champions.json` (champions will be sorted automatically)
4. Run the `champions` module which makes data uniform to our model and scrapes for assets if any champion has had their abiliites changed or requires new ones

## Key Takeaways for Preason 2021 and Season 11
The item system is getting a complete revamp in November 2021. PBE item changes will come out in about 2-3 weeks (as of September 20, 2020). As such, adjustment to the `Item` model is required according to the way that new item data is presented. Currently, all items include all item base stats, but only a few item passives calculations are included eg. Stinger, Fiendish Codex, Nashor's Tooth, Kindlegem, and a few others.

**Design structure for the new item system (Updated)**
1. Look at the new structure of items and create a model of the new items in the system for calculation purposes. This must be made in according with the `Champion` model since all services depend on the same structure
2. Use Meraki CDN to get the new item data and map its relevant stats to the new `Item` model
3. Interpret passive information and apply its effects statwise and interaction wise (actives not yet, still WIP)
4. Update `core/services/items.service.ts` according to the model and data changes

update: As of November 2021, new item data has come in from the League of Legends Wiki and after taking a look at the data model provided, data is fairly complete and has been adjusted to the new `Item` model. However, some passive interactions such as Oblivion Orb and Morellonomicon have the same effect, but different unique passive names, meaning that we'll need to interpret the effects and assign meaningful values. Unique item interactions are reduced to Mythics, Legendaries, and a few of the Epic items. Transition to preseason will start with items and then getting new/updating champion information.