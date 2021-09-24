function myNestedFunction(arr) {
    myNestedArray = [...arr];
    return myNestedArray
}

myNestedArray = [["Toblerone", 5],["Milka", 3]];

console.log(myNestedFunction(myNestedArray));

module.exports = myNestedFunction;