import * as express from "express";
var championsModule = require("./routes/champions.route");
var champions = championsModule.router;
var items = require("./routes/items.route");
var runes = require("./routes/runes.route");
var contact = require("./routes/contact.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.use("/api/contact", contact);
var portNumber = 3000;
app.listen(portNumber, "127.0.0.1", () => {
	console.log(`server now listening on port ${portNumber}`);
});
