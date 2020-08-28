import * as express from "express";
import { ITEMS } from "../data/items";
var router = express.Router();

router.get("/", (req, res) => {
	res.send(ITEMS);
});

router.get("/:item", (req, res) => {
	// something related to json hijacking that we wrap as with an array
	res.send([ITEMS[Number(req.params.item)]]);
});

module.exports = router;