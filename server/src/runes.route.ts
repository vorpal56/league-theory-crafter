import * as express from "express";
import { RUNES, RUNE_SHARDS } from "../data/runes";
var router = express.Router();

router.get("/main", (req, res) => {
	res.send(RUNES);
});

router.get("/shards", (req, res) => {
	res.send(RUNE_SHARDS);
});

module.exports = router;