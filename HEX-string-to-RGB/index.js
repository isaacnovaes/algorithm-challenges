function hexStringToRGB(hexString) {
	const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	const arrNumber = [];
	hexString = hexString.toUpperCase();
	switch (hexString.length) {
		case 7:
			for (let index = 1; index < 6; index += 2) {
				arrNumber[(index - 1) / 2] =
					16 * arr.indexOf(hexString.charAt(index)) + arr.indexOf(hexString.charAt(index + 1));
			}
			return { r: arrNumber[0], g: arrNumber[1], b: arrNumber[2] };
		case 4:
			for (let index = 1; index < 4; index++) {
				arrNumber[index - 1] = 17 * arr.indexOf(hexString.charAt(index));
			}
			return { r: arrNumber[0], g: arrNumber[1], b: arrNumber[2] };
	}
}
