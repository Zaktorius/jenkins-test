var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with hola World!', function(done) {
        request(app).get('/').expect('hola World!', done);
    });
});