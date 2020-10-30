"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    next({
        error: "Not Found",
        code: 404
    });
};
//# sourceMappingURL=notFoundRoutes.js.map