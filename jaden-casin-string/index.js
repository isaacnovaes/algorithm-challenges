String.prototype.toJadenCase = function () {
	let length = this.length, string = this;

	for (let i = 0; i < length; ++i) {
		if (97 <= string.charCodeAt(0) && string.charCodeAt(0) <= 122) {
			string = String.fromCharCode(string.charCodeAt(0)-32) + string.slice(1);
		} //For the initial character, in case it is lower case

		if (97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122 && string.charCodeAt(i-1) === 32) {
			string = string.slice(0,i) + String.fromCharCode(string.charCodeAt(i)-32) + string.slice(i+1);
		} //From lower case to upper case
		if (33 <= string.charCodeAt(i) && string.charCodeAt(i) <= 58 && string.charCodeAt(i-1) === 32) {
			string = string.slice(0,i) + String.fromCharCode(string.charCodeAt(i)+32) + string.slice(i+1);
		} // From numbers and special characters to upper case
		if (80 <= string.charCodeAt(i) && string.charCodeAt(i) <= 89 && 48 <= string.charCodeAt(i+1) && string.charCodeAt(i+1) <= 57) {
			string = string.slice(0,i) + String.fromCharCode(string.charCodeAt(i)-32) + string.slice(i+1);
		}	// If an upper case letter precedes a number, transform this letter into a number
	}
    return string;
};

console.log(") am Q2 years old, but ) can understand a complex reasoning".toJadenCase()); // Output: I Am 12 Years Old, But I Can Understand A Complex Reasoning

console.log("How can mirrors be real if our eyes aren't real".toJadenCase()); // Output: How Can Mirrors Be Real If Our Eyes Aren't Real