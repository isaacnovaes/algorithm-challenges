function tribonacci(signature, n) {
	const arr = [...signature];

	switch (n) {
		case 0:
			return [];
		case 1:
			return [arr[0]];
		case 2:
			return [arr[0], arr[1]];
		case 3:
			return arr;
	}

	for (let index = 3; index < n; index++) {
		arr[index] = arr[index - 1] + arr[index - 2] + arr[index - 3];
	}

	return arr;
}
