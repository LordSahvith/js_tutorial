// Reverses a string
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a plaindrome, false otherwise
function palindrome(string) {
    let stringLowercase = string.toLowerCase();
    return stringLowercase === reverse(stringLowercase);
}