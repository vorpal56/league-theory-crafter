import * as express from "express";
// import { ITEMS } from "../../data/updated_items_merkai";
var router = express.Router();

router.get("/", (req, res) => {
	// setTimeout(() => {
	// res.send(ITEMS);
	// }, 50000);
	let json_file = `../../data/json/items.json`;
	import(json_file).then(data => {
		res.header("Content-Type", 'application/json');
		res.send(JSON.stringify(data));
	});
});

// router.get("/:id", (req, res) => {
// 	// something related to json hijacking that we wrap as with an array
// 	res.send([ITEMS[Number(req.params.id)]]);
// });

module.exports = router;