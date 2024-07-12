const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    this.timeout(5000);
    // #1 GET:/api/convert
    test('Convert valid input : 10L', () => {
        const output = `{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"}`
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=10L')
            .end((err, res) => {
                assert.equal(res.text, output)
            });
    });
    // #2 GET:/api/convert
    test('Convert invalid input : 32g', () => {
        const output = `invalid unit`
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=32g')
            .end((err, res) => {
                assert.equal(res.text, output)
            });
    });
    // #3 GET:/api/convert
    test('Convert invalid number : 3/7.2/4kg', () => {
        const output = `invalid number`
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=3/7.2/4kg')
            .end((err, res) => {
                assert.equal(res.text, output)
            });
    });
    // #4 GET:/api/convert
    test('Convert invalid number AND unit : 3/7.2/4kilomegagram', () => {
        const output = `invalid number and unit`
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=3/7.2/4kilomegagram')
            .end((err, res) => {
                assert.equal(res.text, output)
            });
    });
    // #5 GET:/api/convert
    test('Convert with no number : kg', () => {
        const output = `{"initNum":1,"initUnit":"kg","returnNum":2.20462,"returnUnit":"lbs","string":"1 kilograms converts to 2.20462 pounds"}`
        chai
            .request(server)
            .keepOpen()
            .get('/api/convert?input=kg')
            .end((err, res) => {
                assert.equal(res.text, output)
            });
    });
});
