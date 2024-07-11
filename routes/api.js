'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', async (req, res) => {
    // get input query
    const { input } = req.query;
    if (!input) {
      res.send('invalid unit')
      return;
    }

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum,initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
  
    const returnString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);

    res.send({ 
      initNum: initNum, 
      initUnit: initUnit, 
      returnNum: returnNum, 
      returnUnit: returnUnit, 
      string: returnString
    });
  });

};
