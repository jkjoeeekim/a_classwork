// test case arr
arr = [1,2,3,4,5,6,7,8];

// Array#myEach: my custom Array#forEach
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

// function logElement(ele)  {
//     console.log(ele);
// }

// arr.myEach(logElement);


// Array#myMap: my custom Array#Map
Array.prototype.myMap = function(callback) {
    let arr =[];

    this.myEach((ele) => {
        arr.push(callback(ele))
    });
    return arr;
}

// function doubleEle(ele) {
//     return ele * 2;
// }

// console.log(arr.myMap(doubleEle));


// Array#myReduce: my custom Array#inject
Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    // debugger
    let acc = initialValue

    if (acc === undefined) {
        acc = arr[0];
        arr.splice(0, 1);
    };

    arr.myEach((ele) => {
        acc = (callback(ele, acc));
    });

    return acc;
};

// function add(acc, ele) {
//     return acc + ele;
// };

// console.log(arr.myReduce(add));