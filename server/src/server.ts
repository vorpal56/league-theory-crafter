import * as express from "express";
var champions = require("./champions.route");
var items = require("./items.route");
var runes = require("./runes.route");
const app = express();


app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
	if (req.method == "OPTIONS") {
		res.send(200);
	} else {
		let date = new Date().toLocaleString();
		console.log(`${date} ${res.statusCode} ${req.method} ${req.url}`);
		next();
	}
});
app.use("/api/champions", champions);
app.use("/api/items", items);
app.use("/api/runes", runes);
app.listen(3000, "127.0.0.1", () => {
	console.log("server now listening on port 3000");
});
