function prefill(n, v = undefined) {
	if (n === 0) return [];
	const k = +n;
	try {
		if (!Number.isInteger(k) || k < 0 || n === true || n === false) {
			throw new TypeError(`${n} is invalid`);
		}
	} catch (error) {
		return error;
	}
	const arr = [];
	arr.length = n;
	arr.fill(v);
	return arr;
}


