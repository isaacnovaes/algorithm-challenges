Array.prototype.square = function () {
	return this.map((item) => item ** 2);
};
Array.prototype.cube = function () {
	return this.map((item) => item ** 3);
};
Array.prototype.average = function () {
	if (!this.length) return NaN;
	return this.sum() / this.length;
};
Array.prototype.sum = function () {
	let sum = 0;
	this.forEach((item) => {
		sum += item;
	});
	return sum;
};
Array.prototype.even = function () {
	return this.filter((item) => {
		if (item % 2 == 0) return item;
	});
};
Array.prototype.odd = function () {
	return this.filter((item) => {
		if (item % 2 != 0) return item;
	});
};
