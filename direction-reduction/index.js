function dirReduc(arr) {
	let length = arr.length;
	for (let index = 0; index < length; index++) {
        //Going forwards
		if ((arr[index] == "SOUTH" && arr[index + 1] == "NORTH") || (arr[index] == "NORTH" && arr[index + 1] == "SOUTH")) {
			arr.splice(index, 2);
			length -= 2;
			--index;
		}
		if ((arr[index] == "EAST" && arr[index + 1] == "WEST") || (arr[index] == "WEST" && arr[index + 1] == "EAST")) {
			arr.splice(index, 2);
			length -= 2;
			--index;
		}
        //Going backwards
		if ((arr[index - 1] == "SOUTH" && arr[index] == "NORTH") || (arr[index - 1] == "NORTH" && arr[index] == "SOUTH")) {
			arr.splice(index - 1, 2);
			length -= 2;
			--index;
		}
		if ((arr[index - 1] == "EAST" && arr[index] == "WEST") || (arr[index - 1] == "WEST" && arr[index] == "EAST")) {
			arr.splice(index - 1, 2);
			length -= 2;
			--index;
		}
	}
	return arr;
}
