const padNumber = number => number.toString().padStart(2, "0");

function humanReadable(seconds) {
	if (seconds < 60) {
		return `00:00:${padNumber(seconds)}`;
	}
	if (seconds < 3600) {
		const MM = Math.floor(seconds / 60);
		const SS = seconds - MM * 60;
		return `00:${padNumber(MM)}:${padNumber(SS)}`;
	}
	if (seconds < 359999 + 1) {
		const HH = Math.floor(seconds / 3600);
		const MM = Math.floor((seconds - HH * 3600) / 60);
		const SS = Math.floor(seconds - HH * 3600 - MM * 60);
		return `${padNumber(HH)}:${padNumber(MM)}:${padNumber(SS)}`;
	}
}
