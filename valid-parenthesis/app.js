function validParentheses(parens) {
	parens = parens.replace(/[^\(\)]/g, "");

	const newArr = parens.split(""),
		length = newArr.length;
	for (let i = 0; i < length; i++) {
		if (newArr[i] == "(") {
			loop: for (let j = i + 1; j < length; j++) {
				if (newArr[j] == ")") {
					newArr[i] = "";
					newArr[j] = "";
					break loop;
				}
			}
		}
	}
	if (newArr.every((item) => item == "")) {
		return true;
	}
	return false;
}
