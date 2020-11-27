import * as express from "express";
// import { ITEMS } from "../../data/updated_items_merkai";
import { ITEMS } from "../../data/json_meraki_item_cache/preseason_11/updated_items_merkai";
var router = express.Router();

router.get("/", (req, res) => {
	// setTimeout(() => {
	res.send(ITEMS);
	// }, 50000);
});

router.get("/:id", (req, res) => {
	// something related to json hijacking that we wrap as with an array
	res.send([ITEMS[Number(req.params.id)]]);
});

module.exports = router;