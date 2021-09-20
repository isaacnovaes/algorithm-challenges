function incrementString(string) {
	const pattern = /\d+\b/;
	if (pattern.test(string)) {
		let number = string.match(pattern)[0];
		const length = number.length;
		number = +number + 1; //raw number

		for (let index = 0; number.toString().length < length; index++) {
			number = "0" + number;
		}

		string = string.replace(pattern, "").concat(number);
	} else {
		string = string.concat("1");
	}
	return string;
}
