const calculationFunc = (operation, firstNumber, secondNumber) => {
	let result;
	switch (operation) {
		case "plus":
			result = firstNumber + secondNumber;
			return +result.toFixed(0);
		case "minus":
			result = firstNumber - secondNumber;
			return +result.toFixed(0);
		case "times":
			result = firstNumber * secondNumber;
			return +result.toFixed(0);
		case "division":
			result = Math.floor(firstNumber / secondNumber);
			return result;
	}
};

const zero = (num = { operation: false, normalNumber: 0 }) => {
	return num.operation ? calculationFunc(num.operation, 0, num.operand) : num.normalNumber;
};
const one = (num = { operation: false, normalNumber: 1 }) => {
	return num.operation ? calculationFunc(num.operation, 1, num.operand) : num.normalNumber;
};
const two = (num = { operation: false, normalNumber: 2 }) => {
	return num.operation ? calculationFunc(num.operation, 2, num.operand) : num.normalNumber;
};
const three = (num = { operation: false, normalNumber: 3 }) => {
	return num.operation ? calculationFunc(num.operation, 3, num.operand) : num.normalNumber;
};
const four = (num = { operation: false, normalNumber: 4 }) => {
	return num.operation ? calculationFunc(num.operation, 4, num.operand) : num.normalNumber;
};
const five = (num = { operation: false, normalNumber: 5 }) => {
	return num.operation ? calculationFunc(num.operation, 5, num.operand) : num.normalNumber;
};
const six = (num = { operation: false, normalNumber: 6 }) => {
	return num.operation ? calculationFunc(num.operation, 6, num.operand) : num.normalNumber;
};
const seven = (num = { operation: false, normalNumber: 7 }) => {
	return num.operation ? calculationFunc(num.operation, 7, num.operand) : num.normalNumber;
};
const eight = (num = { operation: false, normalNumber: 8 }) => {
	return num.operation ? calculationFunc(num.operation, 8, num.operand) : num.normalNumber;
};
const nine = (num = { operation: false, normalNumber: 9 }) => {
	return num.operation ? calculationFunc(num.operation, 9, num.operand) : num.normalNumber;
};

const plus = (num) => {
	return { operation: "plus", operand: num };
};

const minus = (num) => {
	return { operation: "minus", operand: num };
};

const times = (num) => {
	return { operation: "times", operand: num };
};

const dividedBy = (num) => {
	return { operation: "division", operand: num };
};


// seven(times(five())); // return 35
// four(plus(nine())); // return 13
// eight(minus(three())); // return 5
// six(dividedBy(two())); // return 3