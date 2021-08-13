var isPP = function (n) {
	const possibleExponentsOfK = [];
	let i = 0,
		maxNumberK = Math.ceil(Math.log2(n));
	while (maxNumberK > 1) {
		possibleExponentsOfK[i] = maxNumberK;
		--maxNumberK;
		++i;
	}
	const divisorsOfN = [];
	divisorsOfN[0] = 1;
	let integer = 2,
		index = 1;
	while (integer <= n) {  // Fix it! too many iterations
		if (n % integer == 0) {
			divisorsOfN[index] = integer;
			++index;
		}
		++integer;
	}
	const lengthDivisors = divisorsOfN.length,
		lengthPossibleExponentsOfK = possibleExponentsOfK.length;
	for (let i = 0; i < lengthDivisors; i++) {
		for (let j = 0; j < lengthPossibleExponentsOfK; j++) {
			if (divisorsOfN[i] ** possibleExponentsOfK[j] == n) {
				return [divisorsOfN[i], possibleExponentsOfK[j]];
			}
		}
	}
	return null;
};

console.log(isPP(1023));
