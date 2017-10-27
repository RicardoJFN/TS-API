"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Integration tests', function () {
    describe('GET /api/users/all', function () {
        it('Must return a JSON file with all users', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Must return a JSON file with a user by id', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Must create a new user', function (done) {
            var user = {
                name: 'Test'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('PUT /api/users/:id/edit', function () {
        it('Must update a user by id', function (done) {
            var user = {
                name: 'Test'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/edit")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Must delete a user by id', function (done) {
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});
