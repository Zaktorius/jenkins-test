var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with hello World!', function(done) {
        request(app).get('/').expect('hello World!', done);
    });
});