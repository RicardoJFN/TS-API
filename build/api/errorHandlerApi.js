"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.log('API error was executed: ${err}');
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Server internal error'
    });
}
exports.errorHandlerApi = errorHandlerApi;
