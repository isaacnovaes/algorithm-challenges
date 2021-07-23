var maxSequence = function (arr) {
	let length = arr.length;

	if (!length) return 0; //If the array is an empty array

	function isNegative(value) {
		return value < 0;
	}
	if (arr.every(isNegative)) return 0; //If the array consists of only negative values

	if(length == 1) return arr;

	const arrMax = [],
		arrSliceIndex = [],
		arrIndexSum = [];
	for (let i = 0; i < length; i++) {
		arrMax[i] = arr[i];
		let maxSum = -Infinity;
		for (let j = i + 1, k = 1; j < length; j++, k++) {
			arrMax[i] += arr[j];
			if (arrMax[i] > maxSum) {
				arraySum = arrMax[i];
				arrSliceIndex[i] = k;
			}

			if (i == length - 1) arrSliceIndex[i] = 0;
		}
	}
	function findSum(total, value) {
		return total + value;
	}
	for (let i = 0; i < length; i++) {
		if (i == length - 1) arrIndexSum[i] = arr[i];
		else if (i == length - 2) {
			arrIndexSum[i] = arr[i] + arr[i + 1];
		} else {
			arrIndexSum[i] = arr.slice(i, i + arrSliceIndex[i] + 1).reduce(findSum);
		}
	}

	function findMaxItemIndex(array) {
		let max = -Infinity,
			index;
		for (let i = 0; i < length; i++) {
			if (array[i] > max) {
				max = array[i];
			}
		}
		return index;
	}
	return arr.slice(findMaxItemIndex(arrIndexSum),arrSliceIndex[findMaxItemIndex(arrIndexSum)]+1)
};

//arrMax stores the maximum sum of arr starting from i
//arrSliceIndex stores the index j which represents until which index it was necessary to obtain the maximum sum, starting from index i
// k represents the number of index, except i, which are necessary to produce the max  sum
