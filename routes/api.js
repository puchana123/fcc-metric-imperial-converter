'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', async (req, res) => {
    // get input query
    const { input } = req.query;

    // check input number
    const initNum = convertHandler.getNum(input);
    if (initNum === false) {
      res.send('invalid number');
      return;
    };
    // check input unit
    const initUnit = convertHandler.getUnit(input);
    if (initUnit === false) {
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
