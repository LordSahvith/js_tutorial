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
    return states.map(states => urlify(states));
}

console.log(functionalMap(states));

// create full url with string
function mapURL(states) {
    return states.map(state => "https://example.com/" + urlify(state));
}

// console.log(mapURL(states));

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