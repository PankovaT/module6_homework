//Задание №1

function showItems() {
    let arr = [8, 3, 0.6, 2, 0.8, 67, "Ла-Ла-Ленд", 0, 0, 0, 0, 0, 6, 15, 12, 13, 666];
    let zero = 0;
    let odd = 0;
    let str = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero += 1;
        } else if (arr[i] % 2 === 0) {
            even += 1;
        } else if (typeof arr[i] === "string") {
            str += 1;
        } else {
            odd += 1;
        }
    }

    console.log(`В массиве: ${str} строк, ${zero} нолей, ${even} чётных чисел и ${odd} нечётных чисел`);
};

showItems();

