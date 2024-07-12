const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    this.timeout(5000);
    // #1 GET:/api/convert
    test('Convert valid input : 10L', ()=>{
        assert.fail();
    });
    // #2 GET:/api/convert
    test('Convert invalid input : 32g', ()=>{
        assert.fail();
    });
    // #3 GET:/api/convert
    test('Convert invalid number : 3/7.2/4kg', ()=>{
        assert.fail();
    });
    // #4 GET:/api/convert
    test('Convert invalid number AND unit : 3/7.2/4kilomegagram', ()=>{
        assert.fail();
    });
    // #5 GET:/api/convert
    test('Convert with no number : kg', ()=>{
        assert.fail();
    });    
});
