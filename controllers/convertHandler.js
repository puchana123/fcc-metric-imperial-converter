function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    result = 'init number'
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    result = 'init unit'
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    result = 'return unit'
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    result = 'full unit string'
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    result = 'retrun number & unit'
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    const returnUnitFull = this.spellOutUnit(returnUnit);
    const initUnitFull = this.spellOutUnit(initUnit);
    result = `${initNum} ${initUnitFull} converts to ${returnNum} ${returnUnitFull}`
    return result;
  };
  
}

module.exports = ConvertHandler;
