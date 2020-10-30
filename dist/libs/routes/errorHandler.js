"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ((err, req, res, next) => {
    console.log(err);
    res.json({
        error: err.error,
        status: err.code,
        message: err.message || "Error",
        timeStamp: new Date()
    });
});
//# sourceMappingURL=errorHandler.js.map