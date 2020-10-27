"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePatchBodyParser = void 0;
const restify_errors_1 = require("restify-errors");
const mpContentType = "application/merge-patch+json";
exports.mergePatchBodyParser = (req, res, next) => {
    if (req.contentType() === mpContentType && req.method === "PATCH") {
        req.rawBody = req.body;
        try {
            req.body = JSON.parse(req.body);
        }
        catch (error) {
            return next(new restify_errors_1.BadRequestError(`Invalid Content: ${error.message}`));
        }
    }
    return next();
};
