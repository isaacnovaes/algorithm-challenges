function domainName(url) {
	let firstParse = url.replace(/(https?:\/\/(www.)?|^(www.))/, "");
	return firstParse.slice(0, firstParse.indexOf("."));
}
