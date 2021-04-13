"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3001;

var app = (0, _express2.default)();
var router = _express2.default.Router();
var server = _http2.default.Server(app);

app.use(_express2.default.static(_path2.default.join(__dirname, "/../public")));
app.use(_bodyParser2.default.json());

router.get("/", function (req, res) {
	res.sendFile(_path2.default.join(__dirname + "/../public/index.html"));
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