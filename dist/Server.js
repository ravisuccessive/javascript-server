"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.setupRouts();
        return this;
    }
    setupRouts() {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            console.log("inside Second middleware");
            res.send("I am OK");
        });
        this.app.use(routes_1.notFoundHandler);
        this.app.use(routes_1.errorHandler);
        this.app.use((req, res, next) => {
            next({
                error: "Not Found",
                code: 404
            });
        });
        this.app.use((err, req, res, next) => {
            console.log(err);
            res.json({
                "error ": err.error,
                status: err.code,
                message: err.message || "Error",
                timeStamp: new Date()
            });
        });
        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json({ type: 'application/**json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map