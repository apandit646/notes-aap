function multiply(a, b) {
    return a * b;
}

function calculateAndPrint() {
    const result = multiply(4, 5); // Calling `multiply` inside another function
    console.log(`The product is: ${result}`);
}

calculateAndPrint();