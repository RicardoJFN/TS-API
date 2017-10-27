import { app, request, expect } from './config/helpers';

describe('Integration tests', () => {

    describe('GET /api/users/all', () => {
        it('Must return a JSON file with all users', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('GET /api/users/:id', () => {
        it('Must return a JSON file with a user by id', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('POST /api/users/new', () => {
        it('Must create a new user', done => {
            const user = {
                name: 'Test'
            }
            request(app)
                .post('/api/users/new')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('PUT /api/users/:id/edit', () => {
        it('Must update a user by id', done => {
            const user = {
                name: 'Test'
            }
            request(app)
                .put(`/api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('Must delete a user by id', done => {
            request(app)
                .put(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

});