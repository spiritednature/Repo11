var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];
    
    for (var i=0; i < arr.length; i++) {
        monitorsList[i] = i + 1;
    }

    newMonitorsList.push(monitorsList);
    
    return newMonitorsList;

}

console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;