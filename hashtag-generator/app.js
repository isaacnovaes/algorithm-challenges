function generateHashtag(str = "") {
	let string = str.slice().trim().replace(/\s+/g, " ");

	if (string === "" || string.length >= 140) return false;

	string = string
		.split(" ")
		.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join("");

	return `#${string}`;
}
