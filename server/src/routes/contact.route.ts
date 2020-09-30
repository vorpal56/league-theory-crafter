import * as express from "express";
var multer = require('multer');
var router = express.Router();
var upload = multer();
router.post("/", upload.none(), (req, res) => {
	let jsonBody = JSON.parse(JSON.stringify(req.body));
	console.log(jsonBody);
	setTimeout(() => {
		res.header("Content-Type", 'application/json');
		res.send({ result: "success", data: JSON.stringify({ "name": [jsonBody["name"]], "email": [jsonBody["email"]], "message": [jsonBody["message"]] }) });
	}, 1000);
});
module.exports = router;