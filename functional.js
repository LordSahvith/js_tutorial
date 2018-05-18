// Functional Programming with Map, Filter & Reduce


// Map Section

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// map: Imperative version
function imperativeMap(states) {
    let urlStates = [];
    states.forEach(function(state) {
       urlStates.push(urlify(state)); 
    });
    return urlStates;
}

console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
    return states.map(state => urlify(state));
}

console.log(functionalMap(states));

// exercise 6.1
// create full url with string
function mapURL(states) {
    return states.map(state => "https://example.com/" + urlify(state));
}

console.log(mapURL(states));


// Filter section

// filter: Imperative version
function imperativeFilter(states) {
    let singleWordSates = [];
    states.forEach(function(state) {
       if (state.split(/\s+/).length == 1) {
           singleWordSates.push(state);
       } 
    });
    return singleWordSates;
}

console.log(imperativeFilter(states));

// filter: functional version
function functionalFilter(states) {
    return states.filter(state => state.split(/\s+/).length === 1);
}

console.log(functionalFilter(states));

// exercise 6.2
// filter: test string includes
function includesFilter(states) {
    return states.filter(state => state.includes("Dakota"));
}

console.log(includesFilter(states));

// filter: test for 2 strings
function doubleWordFilter(states) {
    return states.filter(state => state.split(/\s+/).length === 2);
}

console.log(doubleWordFilter(states));


// Reduce Section


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce: Iterative solution
function iterativeSum(array) {
    let total = 0;
    array.forEach(function(n) {
       total += n; 
    });
    return total;
}

console.log(iterativeSum(a));

// reduce: Functional solution
function functionalSum(array) {
    return array.reduce((total, n) => { return total += n});
}

console.log(functionalSum(a));

// reduce object: Imperative solution
function imperativeLengths(states) {
    let lengths = [];
    states.forEach(function(state) {
       lengths[state] = state.length; 
    });
    return lengths;
}

console.log(imperativeLengths(states));

// reduce object: Functional solution
function functionalLengths(states) {
    return states.reduce((lengths, state) => {
        lengths[state] = state.length; 
        return lengths;
    }, {});
}

console.log(functionalLengths(states));

// exercise 6.3
// reduce: get the product of an array
function productReduce(array) {
    return array.reduce((total, n) => { return total *= n});
}

console.log(productReduce(a));