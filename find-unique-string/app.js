function findUniq(arr) {
	const lowerCaseArray = arr
		.slice()
		.map((item) => item.toLowerCase().split("").sort().join(""))
		.map((item) => {
			const wordSet = new Set(item.split(""));
			return Array.from(wordSet).join("");
		});
	const length = lowerCaseArray.length;
	let commonElement;
	loop: for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (lowerCaseArray[i] === lowerCaseArray[j]) {
				commonElement = lowerCaseArray[i];
				break loop;
			}
		}
	}
	return arr[lowerCaseArray.findIndex((item) => item !== commonElement)];
}
