// Reverses a string
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Defines a Phrase Object
function Phrase(content) {
    this.content = content;

    // Returns true for a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        let processedContent = this.content.toLowerCase();
        return processedContent === reverse(processedContent);
    }
    
    // exercise 7.1
    // makes the phrase LOUDER
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}
