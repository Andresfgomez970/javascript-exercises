const ftoc = function(tempInF) {
  let tempInC;
  tempInC = 5 / 9 * (tempInF - 32);
  tempInC = Math.round(tempInC  * 10) / 10;

  return tempInC;

};

const ctof = function(tempInC) {
  let tempInF;
  tempInF = 9 / 5 * tempInC + 32;
  tempInF = Math.round(tempInF  * 10) / 10;

  return tempInF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


console.log(ftoc(32));