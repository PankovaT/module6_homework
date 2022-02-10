//задание №4
function showNumbers(from, to) {
    let start = from;
    let delay = setInterval(function () {
        console.log(start);
        if (start == to) {
            clearInterval(delay);
        }
        start++;
    }, 1000);
}

showNumbers(5, 15);