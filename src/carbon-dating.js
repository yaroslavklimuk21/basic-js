const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let numSampleActivity = Number(sampleActivity);
  if (typeof numSampleActivity != Number){
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/numSampleActivity)/(0.693/HALF_LIFE_PERIOD));
  return result;
};
