//задание №5

const result = (x, n) => {
    let a = x;
    for (let i = 1; i < n; i++) {
        a *= x;
    }

    return a;
}

console.log(result(10, 2));