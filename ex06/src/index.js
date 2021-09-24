
function multiplyArrayFunction(myArray) {
    var product;
    for (var i = 0; i < myArray.length; i++) {
        for (var j = i; j < myArray.length; j++) {
            for (var k = i; k <= j; k++)
                product *= myArray[k];
            }
        }

    var sum; 
    for (var i = 0; i < myArray.length; i++) {
        for (var j = i; j < myArray.length; j++) {
            for (var k = i; k <= j; k++)
                sum += myArray[k];
        }
    }

    return { 
        product,
        sum 
    }
}

console.log(multiplyArrayFunction([2], [5, 6, 7], [8, 9]));

module.exports = multiplyArrayFunction;