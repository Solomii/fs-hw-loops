const MAX_TRY = 3;
const MIN_NUMBER = 15;
const MAX_NUMBER = 35;
let amount_try = 0;

// debugger
function numbers(number, amount_try, MAX_TRY) {
    const userInputNumber = prompt("Enter Number:");

    if (
        userInputNumber === null ||
        userInputNumber === "" ||
        Number.isNaN(userInputNumber)
    ) {
        return "error";
    }

    if (amount_try > MAX_TRY) {
        return "attempts are over";
    }

    if (number >= MIN_NUMBER && number <= MAX_NUMBER && number % 6 === 0) {
        for (let i = 0; i < MAX_TRY; i++) {
            if (userInputNumber === number) {
                return console.log(userInputNumber);
            }
            amount_try++;
            return userInputNumber;
        }
    } else {
        return "the number does not match";
    }
}

console.log(numbers(24, 2, 3));
console.log(numbers(30, 4, 1));
console.log(numbers(18, 2, 2));
console.log(numbers(40, 2, 2));
console.log(numbers(17, 2, 2));
// console.log(numbers(30,0,2));
// console.log(numbers(32,1,2));
// console.log(numbers(2,4,2));
// console.log(numbers(40,1,2));
