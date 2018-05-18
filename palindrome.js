// Reverses a string
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Defines a Phrase Object
function Phrase(content) {
    this.content = content;
    
    // process string to lowercase
    this.processor = function(string) {
        return string.toLowerCase();
    }
    
    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true for a plaindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
    
    // exercise 7.1
    // makes the phrase LOUDER
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    
    // Returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();
