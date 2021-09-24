function mySplice(arr1, arr2, n) {
    var arr2 = [...arr1];
    var splice = arr2.splice(n);
    return splice;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));

module.exports = mySplice;