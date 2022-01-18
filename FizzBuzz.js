function isDivisbleBy(n,divisor) {
    return n % divisor === 0;
}

for (i=1; i<=200; i++) {
    
    let result = "";
    let fezzResult = "";

    if (isDivisbleBy(i,3)) {
        result = "Fizz";
    };
    if (isDivisbleBy(i,13)) {
        result += "Fezz";
        fezzResult = "Fezz";
    };
    
    if (isDivisbleBy(i,5)) {
        result += "Buzz";
    };
    if (isDivisbleBy(i,7)) {
        result += "Bang";
    };
    if (isDivisbleBy(i,11)) {
        result = fezzResult + "Bong";
    };
    
    if (result === "") {
        result = i;
    };
        console.log(result);
    }
