function main() {

    var num1 = parseInt(2);
    var num2 = parseInt(2);
    var num3 = parseInt(2);
    sumNum(num1, num2, num3);

    var num4 = parseInt(2);
    var num5 = parseInt(2);
    alert(product(num4, num5));
}


main();

function sumNum(num1, num2, num3) {
    var sumOfNumbers = num1 + num2 + num3;
    alert(sumOfNumbers);

}

function product(num4, num5) {
    var multiples = num4 * num5;
    return(multiples);

}