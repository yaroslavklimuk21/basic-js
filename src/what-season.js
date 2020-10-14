const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (typeof date === "undefined")
		return "Unable to determine the time of year!";
	if (Object.prototype.toString.call(date) != "[object Date]")
		throw new Error("THROWN");
	if (typeof date.getMonth !== "function") throw new Error();
	let season = (month) => {
		if ([0, 1, 11].includes(month)) {
			return "winter";
		} else if ([2, 3, 4].includes(month)) {
			return "spring";
		} else if ([5, 6, 7].includes(month)) {
			return "summer";
		} else if ([8, 9, 10].includes(month)) {
			return "autumn";
		}
		return false;
	};
	let month = date.getMonth();
	return season(month);
};
