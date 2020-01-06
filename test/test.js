var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
    it('respond with heyay World!', function(done) {
        request(app).get('/').expect('heyay World!', done);
    });
});