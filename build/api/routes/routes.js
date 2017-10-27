"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Hello World!'); });
        app.route('/hello/:name').get(function (req, res) { return res.send('Hello, ${req.params.name}'); });
    };
    return Routes;
}());
exports.default = Routes;