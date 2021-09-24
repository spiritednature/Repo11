function largestNumFromArr(arr) {
    var maxNumArr = [];

    for (var i=0; i < arr.length; i++) {
        var individualArray = arr[i];
        var individualHighestValue = -Infinity;
        for (var j=0; j < individualArray.length; j++) {
            if (individualHighestValue < individualArray[j]) {
                individualHighestValue = individualArray[j];
            } 
        }
        maxNumArr.push(individualHighestValue);
    }
    return maxNumArr;
}

console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

module.exports = largestNumFromArr;