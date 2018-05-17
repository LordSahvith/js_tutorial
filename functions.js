// Create Functions using `function` and fat arrow notation

function square(x) {
    return Math.sqrt(x);
}

let alt_square = (x) => {
    return Math.sqrt(x);
}

let x = square(16)
console.log(x);
console.log(alt_square(16));