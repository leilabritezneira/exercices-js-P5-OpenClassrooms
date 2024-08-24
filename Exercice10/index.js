//votre code ici

function printNumbers(number) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += i;
        if (i < number) {
            result += " ";
        }
    }
    return result;
}

export default printNumbers
