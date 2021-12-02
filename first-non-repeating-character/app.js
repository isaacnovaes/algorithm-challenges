function firstNonRepeatingLetter(string) {
	const stringArray = string.slice().split("");
	const repeatedChar = [];
	let length = stringArray.length;
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (stringArray[i].toLowerCase() === stringArray[j].toLowerCase()) {
				repeatedChar.push(stringArray[i]);
			}
		}
	}

	const arr = stringArray.filter(char => {
		if (!repeatedChar.includes(char)) return char;
	});
	return arr.length > 0 ? arr[0] : "";
}