const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;
  let result = members.filter(i => typeof i === 'string').map(i => { return i.trim().slice(0 ,1);});
  result = result.sort((a,b) => {return a.localeCompare(b);}).join('').toString().toUpperCase();
  return result;
};
