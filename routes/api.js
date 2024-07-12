'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', async (req, res) => {
    // get input query
    const { input } = req.query;

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    // check input number & unit
    if (initNum === false && initUnit === false) {
      res.send('invalid number and unit');
      return;
    } else if (initNum === false) {
      res.send('invalid number');
      return;
    } else if (initUnit === false) {
      res.send('invalid unit');
      return;
    };
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    const returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    res.send({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: returnString
    });
  });

};
