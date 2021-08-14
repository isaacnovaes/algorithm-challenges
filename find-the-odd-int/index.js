function findOdd(A) {
	const oddCounter = [],
		inputLength = A.length;
	for (let i = 0; i < inputLength; i++) {
		let counter = 1;
		loop: for (let j = i + 1; j < inputLength; j++) {
			if (i > 0) {
				//Check if the element A[i] has already appeared before
				for (let index = i - 1; index > -1; index--) {
					if (A[i] == A[index]) {
						++counter;
						break loop;
					}
				}
			}

			if (A[i] == A[j]) {
				++counter;
			}
		}
		counter % 2 != 0 ? (oddCounter[i] = counter) : (oddCounter[i] = 0);
	}
	let max = oddCounter[0],
		maxIndex = 0;
	console.log(A, oddCounter);
	const oddCounterLength = oddCounter.length;
	for (let index = 1; index < oddCounterLength; index++) {
		if (oddCounter[index] > max) {
			max = oddCounter[index];
			maxIndex = index;
		}
	}
	return A[maxIndex];
}
