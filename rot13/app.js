function rot13(str) {
	return (words = str
		.slice()
		.trim()
		.split("")
		.map(char => {
			const ascii = char.charCodeAt(0);
			if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
				if (ascii <= 77) return String.fromCharCode(ascii + 13);
				if (ascii <= 90) return String.fromCharCode(ascii - 13);
				if (ascii <= 109) return String.fromCharCode(ascii + 13);
				if (ascii <= 122) return String.fromCharCode(ascii - 13);
			} else {
				return char;
			}
		})
		.join(""));
}

