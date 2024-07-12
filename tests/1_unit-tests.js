const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Read Input',()=>{
        // #1
        test('Read a whole number input', ()=>{
            const whole_number = '12345';
            const output = convertHandler.getNum(whole_number);
            assert.equal(output, whole_number, "read all input numbers");
        });
        // #2
        test('Read a decimal number input', ()=>{
            const decimal_number = '123.45';
            const output = convertHandler.getNum(decimal_number);
            assert.equal(output, decimal_number, "read a decimal number");
        });
        // #3
        test('Read a fractional input', ()=>{
            const fraction_number = '1/2';
            const output = convertHandler.getNum(fraction_number);
            assert.equal(output, '0.5', "read a fractional number");
        });
        // #4
        test('Read a fractional input with a decimal', ()=>{
            const fraction_number = '1.5/2';
            const output = convertHandler.getNum(fraction_number);
            assert.equal(output, '0.75', "read a fractional number");
        });
    });
// -------------------------------------------------------------
    suite('Input checking',()=>{
        // #5 (i.e. 3/2/3 )
        test('Return an error on a double fraction', ()=>{
            assert.fail();
        });
        // #6
        test('If no numerical input, default should be 1', ()=>{
            assert.fail();
        });
        // #7
        test('Read each valid input unit', ()=>{
            assert.fail();
        });
        // #8
        test('Return an error for an invalid input unit', ()=>{
            assert.fail();
        });
        // #9
        test('Return unit correctly for each valid input unit', ()=>{
            assert.fail();
        });
        // #10
        test('Return the spelled-out string unit correctly for each valid input unit', ()=>{
            assert.fail();
        });
    });
// -------------------------------------------------------------
    suite('Convert unit input',()=>{
        // #11
        test('Convert gal to L', ()=>{
            assert.fail();
        });
        // #12
        test('Convert L to gal', ()=>{
            assert.fail();
        });
        // #13
        test('Convert mi to km', ()=>{
            assert.fail();
        });
        // #14
        test('Convert km to mi', ()=>{
            assert.fail();
        });
        // #15
        test('Convert lbs to kg', ()=>{
            assert.fail();
        });
        // #16
        test('Convert kg to lbs', ()=>{
            assert.fail();
        });
    });
});