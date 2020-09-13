import * as express from "express";
import { ITEMS } from "../../data/updated_items_merkai";
var router = express.Router();

router.get("/", (req, res) => {
	res.send(ITEMS);
});

router.get("/:id", (req, res) => {
	// something related to json hijacking that we wrap as with an array
	res.send([ITEMS[Number(req.params.id)]]);
});

module.exports = router;