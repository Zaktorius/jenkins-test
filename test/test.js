var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with hola papito guachin world!', function(done) {
        request(app).get('/').expect('hola papito guachin World!', done);
    });
});