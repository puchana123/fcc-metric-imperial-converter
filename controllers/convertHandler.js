function ConvertHandler() {

  this.getNum = function (input) {
    let result;
    const divide_count = input.match(/\//g)
    if (divide_count === null || divide_count.length === 1) {
      const number = input.match(/^[0-9]+(\.[0-9]+)?(\/[0-9]+(\.[0-9]+)?)?/g);
      result = number ? eval(number[0]) : 1;

    } else {
      return false;
    };

    return result;
  };

  this.getUnit = function (input) {
    let result;
    const word = input.match(/[a-zA-Z]+/g);
    if (!word) {
      return false;
    } else {
      const valid_unit = word[0].match(/^(gal|l|mi|km|lbs|kg)$/gi);
      if (!valid_unit) {
        return false;
      };
      result = valid_unit[0].toLowerCase() === 'l' ? 'L' : valid_unit[0].toLowerCase();

    };
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case 'gal': result = 'L';
        break;
      case 'L': result = 'gal';
        break;
      case 'mi': result = 'km';
        break;
      case 'km': result = 'mi';
        break;
      case 'lbs': result = 'kg';
        break;
      case 'kg': result = 'lbs';
        break;
      default: result = 'not valid unit'
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case 'gal': result = 'gallons';
        break;
      case 'L': result = 'liters';
        break;
      case 'mi': result = 'miles';
        break;
      case 'km': result = 'kilometers';
        break;
      case 'lbs': result = 'pounds';
        break;
      case 'kg': result = 'kilograms';
        break;
      default: result = 'not valid unit'
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    result = 'retrun number & unit'
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    const returnUnitFull = this.spellOutUnit(returnUnit);
    const initUnitFull = this.spellOutUnit(initUnit);
    result = `${initNum} ${initUnitFull} converts to ${returnNum} ${returnUnitFull}`
    return result;
  };

}

module.exports = ConvertHandler;
