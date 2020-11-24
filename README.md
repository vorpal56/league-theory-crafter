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
You will need [Node.js](https://nodejs.org/en/) to run this project, [npm](https://www.npmjs.com/) (which comes with Node.js during installation), and [Angular 10+](https://angular.io/). To update data, you will need Python 3 as well.
1. `git clone https://github.com/vorpal56/league-theory-crafter.git`
2. `cd league-theory-crafter/`
3. `npm install -g @angular/cli && npm install`
4. `npm install`
5. `pip install -r requirements.txt`

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
All data is provided by the [League of Legends Wiki](https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki) and compiled together by [Meraki Analytics](https://github.com/meraki-analytics) in the [`lolstaticdata` repository](https://github.com/meraki-analytics/lolstaticdata).

Run them as **modules** instead of **scripts** to prevent module import errors. 
### Updating Champions
Existing Champions are updated and new Champions are added to the existing list whenever new patch data is available. Assets are scraped on new Champions or when abilities are changed. Running the `champions` module will provide information in the console about which sections were changed such as asset locations, skill ability names, stat changes, and so on.
```
npm run update-champions
```

### Updating Items
Items are updated less frequently, but during Preseason 2021, data is updated quite regularly. Items are modelled in a similar way to Champions so that data relationships are easy to map in the application. Item images are hotlinked directly to Data Dragon.
```
npm run update-items
```

## Key Takeaways for Preseason 2021
The item system is getting a complete revamp in November 2020. PBE item changes will come out in about 2-3 weeks (as of September 20, 2020). As such, adjustment to the `Item` model is required according to the way that new item data is presented.

**Design structure for the new item system (Updated)**
1. Look at the new structure of items and create a model of the new items in the system for calculation purposes. This must be made in according with the `Champion` model since all services depend on the same structure
2. Use Meraki CDN to get the new item data and map its relevant stats to the new `Item` model
3. Interpret passive information and apply its effects statwise and interaction wise (actives not yet, still WIP)
4. Update `core/services/items.service.ts` according to the model and data changes

**update**: As of November 2020, new item data has come in from the League of Legends Wiki and after taking a look at the data model provided, data is fairly complete and has been adjusted to the new `Item` model. However, some passive interactions such as Oblivion Orb and Morellonomicon have the same effect, but different unique passive names, meaning that we'll need to interpret the effects and assign meaningful values. Unique item interactions are reduced to Mythics, Legendaries, and a few of the Epic items (introduced with the `item_group` property). Transition to preseason will start with items and then getting new/updating champion information.