const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Read Input',()=>{
        // #1
        test('Read a whole number input', ()=>{

        });
        // #2
        test('Read a decimal number input', ()=>{
            
        });
        // #3
        test('Read a fractional input', ()=>{
            
        });
        // #4
        test('Read a fractional input with a decimal', ()=>{
            
        });
    });
// -------------------------------------------------------------
    suite('Input checking',()=>{
        // #5 (i.e. 3/2/3 )
        test('Return an error on a double fraction', ()=>{

        });
        // #6
        test('If no numerical input, default should be 1', ()=>{
            
        });
        // #7
        test('Read each valid input unit', ()=>{
            
        });
        // #8
        test('Return an error for an invalid input unit', ()=>{
            
        });
        // #9
        test('Return unit correctly for each valid input unit', ()=>{
            
        });
        // #10
        test('Return the spelled-out string unit correctly for each valid input unit', ()=>{
            
        });
    });
// -------------------------------------------------------------
    suite('Convert unit input',()=>{
        // #11
        test('Convert gal to L', ()=>{

        });
        // #12
        test('Convert L to gal', ()=>{

        });
        // #13
        test('Convert mi to km', ()=>{

        });
        // #14
        test('Convert km to mi', ()=>{

        });
        // #15
        test('Convert lbs to kg', ()=>{

        });
        // #16
        test('Convert kg to lbs', ()=>{

        });
    });
});