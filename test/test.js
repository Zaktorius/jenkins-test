var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with hola guachin world!', function(done) {
        request(app).get('/').expect('hola guachin World!', done);
    });
});