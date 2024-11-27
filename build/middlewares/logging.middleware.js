"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingMiddleware = void 0;
const loggingMiddleware = (req, res, next) => {
    const log = {
        method: req.method,
        url: req.originalUrl,
        host: req.hostname,
        time: new Date().toISOString(),
        requestBody: req.body,
    };
    console.log(JSON.stringify(log, null, 2));
    next();
};
exports.loggingMiddleware = loggingMiddleware;
