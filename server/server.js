import express from "express";
import bodyParser from "body-parser";
import path from "path";
import http from "http";

var PORT = process.env.PORT || 3001;

const app = express();
const router = express.Router();
const server = http.Server(app);

app.use(express.static(path.join(__dirname, "/../public")));
app.use(bodyParser.json());

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/../public/index.html"));
});

server.listen(PORT);
server.on("error", onError);
server.on("listening", onListening);

var debug = require("debug")("web:server");

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.PORT;
	debug("Listening on " + bind);
}

//export default app;
