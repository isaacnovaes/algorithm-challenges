const sumOfDigits = string => {
	return string.split("").reduce((sum, item) => sum + +item, 0);
};
const swapItems = (index, array) => {
	let temp;
	temp = array[index];
	array[index] = array[index + 1];
	array[index + 1] = temp;
};
function orderWeight(string) {
	let arr = string
		.slice()
		.trim()
		.split(" ")
		.filter(item => item !== "");

	const length = arr.length;

	for (let index = 0; index < length; index++) {
		for (let i = 0; i < length - 1; i++) {
			if (sumOfDigits(arr[i]) > sumOfDigits(arr[i + 1])) swapItems(i, arr);

			if (sumOfDigits(arr[i]) === sumOfDigits(arr[i + 1])) {
				if (arr[i].toString() > arr[i + 1].toString()) swapItems(i, arr);
			}
		}
	}

	return arr.join(" ");
}

