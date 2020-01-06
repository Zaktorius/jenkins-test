var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with hey World!', function(done) {
        request(app).get('/').expect('heya World!', done);
    });
});