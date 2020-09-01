import * as express from "express";
// import { CHAMPIONS } from "../data/updated_champions_ddragon";
import { BASIC_CHAMPIONS } from "../data/champions";
var router = express.Router();
var championRequests = {};
var numRequestChampions = 0;
// router.get("/", (req, res) => {
// 	res.send(CHAMPIONS);
// });
router.get("/basic", (req, res) => {
	res.send(BASIC_CHAMPIONS);
});
router.get("/:apiname", (req, res) => {
	let apiname = req.params.apiname;
	let json_file = `../data/json_ddragon_champion_cache_updated/${apiname}.json`;
	import(json_file).then(data => {
		championRequests[apiname] = numRequestChampions++;
		res.header("Content-Type", 'application/json');
		res.send(JSON.stringify(data));
	});
});

module.exports = { router, championRequests, };