var moveZeros = function (arr) {
	let length = arr.length;
	for (let index = 0; index < length; index++) {
		if (arr[index] === 0) {
			arr.splice(index, 1);
			arr.push(0);
			--index;
            --length;
		}
	}
	return arr;
};