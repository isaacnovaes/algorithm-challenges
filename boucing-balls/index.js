function bouncingBall(h, bounce, window) {
	if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) return -1;
	let index = 0;
	while (h > window) {
		h *= bounce;
		index++;
	}
	return index * 2 - 1;
}
