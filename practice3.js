//задание №3

function amount(a) {
	return function(b) {
		return a + b;
	};
}

console.log( amount(25)(30) );