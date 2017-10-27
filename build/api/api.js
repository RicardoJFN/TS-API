"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
    }
    Api.prototype.middelware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
    };
    return Api;
}());
exports.default = new Api().express;
