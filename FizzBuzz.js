function isDivisbleBy(n,divisor) {
    return n % divisor === 0;
}

for (i=1; i<=260; i++) {
    
    let arrResult = [];
    let fezzResult = "";
            
    if (isDivisbleBy(i,3)) {
        arrResult = ["Fizz"];
    };
    if (isDivisbleBy(i,13)) {
        arrResult.push("Fezz");
        fezzResult = "Fezz";
    };
    
    if (isDivisbleBy(i,5)) {
        arrResult.push("Buzz");
    };
    if (isDivisbleBy(i,7)) {
        arrResult.push("Bang");
    };
    /*Bong should be only result unless Fezz is present*/
    if (isDivisbleBy(i,11)) {
        arrResult = [fezzResult + "Bong"];
    };

    if (isDivisbleBy(i,17)) {
        arrResult = arrResult.reverse();
    };
    
    if (arrResult.length === 0) {
        arrResult = [i];
    };
    let strResult = arrResult.toString();
    strResult = strResult.replace(/,/g, '');
    console.log(strResult);
}
