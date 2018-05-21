let Phrase = require("sahvith-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a plaindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`);
}