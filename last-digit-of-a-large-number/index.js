let lastDigit = function (str1, str2) {
	if (str2 === "0") return 1;
	const pattern = {
		0: [0, 0, 0, 0],
		1: [1, 1, 1, 1],
		2: [6, 2, 4, 8],
		3: [1, 3, 9, 7],
		4: [6, 4, 6, 4],
		5: [5, 5, 5, 5],
		6: [6, 6, 6, 6],
		7: [1, 7, 9, 3],
		8: [6, 8, 4, 2],
		9: [1, 9, 1, 9],
	};
	return pattern[+str1.slice(-1)][+str2.slice(-2) % 4];
};
