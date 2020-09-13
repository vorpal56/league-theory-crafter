import * as express from "express";
import { RUNE_SHARDS } from "../../data/runes";
var router = express.Router();

router.get("/", (req, res) => {
	let json_file = `../../data/json/runes.json`;
	import(json_file).then(data => {
		res.header("Content-Type", 'application/json');
		res.send(JSON.stringify(data));
	});
});

router.get("/shards", (req, res) => {
	res.send(RUNE_SHARDS);
});

module.exports = router;