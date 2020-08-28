import * as express from "express";
import { CHAMPIONS } from "../data/champions";
var router = express.Router();

router.get("/", (req, res) => {
	res.send(CHAMPIONS);
});

module.exports = router;