//задание №2

function showType(num) {
    let sq = Math.sqrt(num);
    for (let i = 2; i <= sq; i++)
        if (num % i === 0) return "не простое число";
    return "простое число";
}
console.log(showType(X));