const request = require('supertest');
const expect = require('chai').expect;
const app = require('../lib/B.gle')

describe('Member', () => {
    it('Test Signup', (done) => {
        request(app)
            .post('/member')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log('error');
                    done(err);
                    return;
                }
                expect(res.text).to.equal('success');
                done();
            });

    });

});