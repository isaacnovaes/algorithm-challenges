function pigIt(str) {
	return str
		.split(" ")
		.map((item) => {
			return !/[A-Za-z]+/.test(item) ? item : item.slice(1) + item[0] + "ay";
		})
		.join(" ");
}
