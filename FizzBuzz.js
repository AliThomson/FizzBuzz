for (i=1; i<=100; i++) {
function isDivisbleBy(n,divisor) {
    return n % divisor === 0;
}
let result = "";
        if (isDivisbleBy(i,3)) {
            result += "Fizz";
        };
        if (isDivisbleBy(i,5)) {
            result += "Buzz";
        };
        if (isDivisbleBy(i,7)) {
            result += "Bang";
        };
        if (isDivisbleBy(i,11)) {
            result = "Bong";
        };
        if (result === "") {
            result = i;
        };
            console.log(result);
    }
