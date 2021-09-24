var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
]

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    for (var i=0; i < newTemps[0].length; i++) {
        averageDayTemp1 = (newTemps[0][0] + newTemps[0][1] + newTemps[0][2] + newTemps[0][3]) / newTemps[0].length;
    }
    for (var i=0; i < newTemps[1].length; i++) {
        averageDayTemp2 = (newTemps[1][0] + newTemps[1][1] + newTemps[1][2] + newTemps[1][3]) / newTemps[1].length;
    }
    for (var i=0; i < newTemps[2].length; i++) {
        averageDayTemp3 = (newTemps[2][0] + newTemps[2][1] + newTemps[2][2] + newTemps[2][3]) / newTemps[2].length;
    }
    for (var i=0; i < newTemps[3].length; i++) {
        averageDayTemp4 = (newTemps[3][0] + newTemps[3][1] + newTemps[3][2] + newTemps[3][3]) / newTemps[3].length;
    }
    for (var i=0; i < newTemps[4].length; i++) {
        averageDayTemp5 = (newTemps[4][0] + newTemps[4][1] + newTemps[4][2] + newTemps[4][3]) / newTemps[4].length;
    }
        averageDayTemp = [averageDayTemp1, averageDayTemp2, averageDayTemp3, averageDayTemp4, averageDayTemp5];
        
        return averageDayTemp;
    }
    
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;