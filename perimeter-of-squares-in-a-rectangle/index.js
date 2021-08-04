function perimeter(n) {
	switch (n) {
		case 0:
			return 4;
		case 1:
			return 8;
	}
	let arr = [];
	arr[0] = 1;
	arr[1] = 1;
	let sum = 2;
	for (let index = 2; index <= n; index++) {
		arr[index] = arr[index - 1] + arr[index - 2];
		sum += arr[index];
	}
	return sum * 4;
}
