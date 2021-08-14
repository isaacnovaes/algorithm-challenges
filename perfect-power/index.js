var isPP = function (n) {
	const possibleExponentsOfK = [];
	let i = 0,
		maxNumberK = Math.ceil(Math.log2(n));
	while (maxNumberK > 1) {
		possibleExponentsOfK[i] = maxNumberK;
		--maxNumberK;
		++i;
	}
	possibleExponentsOfK.reverse();

	const divisorsOfN = [],
		lengthPossibleExponentsOfK = possibleExponentsOfK.length;
	divisorsOfN[0] = 1;
	let integer = 2,
		index = 1;
	while (integer <= n) {
		if (n % integer == 0) {
			divisorsOfN[index] = integer;
			for (let i = 0; i < lengthPossibleExponentsOfK; i++) {
				if (divisorsOfN[index] ** possibleExponentsOfK[i] == n) {
					return [divisorsOfN[index], possibleExponentsOfK[i]];
				}
			}
			++index;
		}
		++integer;
	}
	return null;
};

