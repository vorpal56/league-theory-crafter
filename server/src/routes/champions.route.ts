import * as express from "express";
var router = express.Router();
var championRequests = {};
var numRequestChampions = 0;
router.get("/", (req, res) => {
	let json_file = `../../data/json/basic_champions.json`;
	import(json_file).then(data => {
		res.header("Content-Type", 'application/json');
		res.send(JSON.stringify(data));
	});
});
router.get("/:apiname", (req, res) => {
	let apiname = req.params.apiname;
	let json_file = `../../data/json_combined_champion_cache/${apiname}.json`;
	import(json_file).then(data => {
		console.log(data);
		championRequests[apiname] = numRequestChampions++;
		res.header("Content-Type", 'application/json');
		res.send(data);
	});
});

module.exports = { router, championRequests, };