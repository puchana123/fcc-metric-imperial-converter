const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    suite('Read Input', () => {
        // #1
        test('Read a whole number input', () => {
            const input = '12345mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, '12345', "read all input numbers");
        });
        // #2
        test('Read a decimal number input', () => {
            const input = '123.45mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, '123.45', "read a decimal number");
        });
        // #3
        test('Read a fractional input', () => {
            const input = '1/2mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, '0.5', "read a fractional number");
        });
        // #4
        test('Read a fractional input with a decimal', () => {
            const input = '1.5/2mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, '0.75', "read a fractional number");
        });
    });
    // -------------------------------------------------------------
    suite('Input checking', () => {
        // #5 (i.e. 3/2/3 )
        test('Return an error on a double fraction', () => {
            const input = '3/2/3mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, false, "return false with invalid input");
        });
        // #6
        test('If no numerical input, default should be 1', () => {
            const input = 'mi';
            const output = convertHandler.getNum(input);
            assert.equal(output, '1', "no input number, default value = 1");
        });
        // #7
        test('Read each valid input unit', () => {
            const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            const expected = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
            input.forEach((unit, index) => {
                const output = convertHandler.getUnit(unit);
                assert.equal(output, expected[index], `expect value ${unit} but get ${output}`);
            });
        });
        // #8
        test('Return an error for an invalid input unit', () => {
            const input = '2ad';
            const output = convertHandler.getUnit(input);
            assert.equal(output, false, "return false while invalid input");
        });
        // #9
        test('Return unit correctly for each valid input unit', () => {
            const input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
            const expected = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
            input.forEach((unit, index) => {
                const output = convertHandler.getReturnUnit(unit);
                assert.equal(output, expected[index], `expect value ${unit} but get ${output}`);
            });
        });
        // #10
        test('Return the spelled-out string unit correctly for each valid input unit', () => {
            const input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
            const expected = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
            input.forEach((unit, index) => {
                const output = convertHandler.spellOutUnit(unit);
                assert.equal(output, expected[index], `expect value ${unit} but get ${output}`);
            });
        });
    });
    // -------------------------------------------------------------
    suite('Convert unit input', () => {
        // #11
        test('Convert gal to L', () => {
            const number = 1;
            const unit = 'gal';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '3.78541', "1 gal = 3.78541 L");
        });
        // #12
        test('Convert L to gal', () => {
            const number = 1;
            const unit = 'L';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '0.26417', "1 L = 0.26417 gal");
        });
        // #13
        test('Convert mi to km', () => {
            const number = 1;
            const unit = 'mi';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '1.60934', "1 mi = 1.60934 km");
        });
        // #14
        test('Convert km to mi', () => {
            const number = 1;
            const unit = 'km';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '0.62137', "1 km = 0.62137 mi");
        });
        // #15
        test('Convert lbs to kg', () => {
            const number = 1;
            const unit = 'lbs';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '0.45359', "1 lbs = 0.45359 kg");
        });
        // #16
        test('Convert kg to lbs', () => {
            const number = 1;
            const unit = 'kg';
            const output = convertHandler.convert(number,unit);
            assert.equal(output, '2.20462', "1 kg = 2.20462 lbs");
        });
    });
});