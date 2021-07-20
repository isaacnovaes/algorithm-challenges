function removeSmallest(numbers) {
	if (!numbers) return [];
	if (numbers.length == 1) return [];
    const numbers1 = numbers.filter(change);
    function change(value,index) {
        if (index != numbers.indexOf(Math.min.apply(null, numbers))) {return value;}
    }
    return numbers1;
}

