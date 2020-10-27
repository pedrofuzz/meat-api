"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    server: {
        port: process.env.SERVER_PORT || 8080,
    },
    db: {
        url: process.env.DB_URL || "mongodb://localhost/meat-api",
    },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || "meat-api-secret",
        enableHTTPS: process.env.ENABLE_HTTPS || false,
        certificate: process.env.CERTIFICATE || "./security/keys/cert.pem",
        key: process.env.KEY || "./security/keys/key.pem",
    },
    log: {
        level: process.env.LOG_LEVEL || "debug",
        name: "meat-api-logger",
    },
};
