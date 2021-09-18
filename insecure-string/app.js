function alphanumeric(string) {
    if (!string.length) return false;
	else if (/\W/.test(string)) return false;
	else if (/(\s|_)/.test(string)) return false;
	else return true;
}
