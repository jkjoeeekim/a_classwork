Array.prototype.mergeSort = function (callback) {
  if (this.length <= 1) {
    return this;
  };

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid);

  let sortedLeft = left.mergeSort(callback);
  let sortedRight = right.mergeSort(callback);

  function _merge() {
    let merged = [];

    while (sortedLeft.length !== 0 && sortedRight.length !== 0) {
      if (callback(sortedLeft[0], sortedRight[0])) {
        merged.push(sortedLeft.shift());
      } else {
        merged.push(sortedRight.shift());
      }
    }

    return merged.concat(sortedLeft, sortedRight);
  }

  return _merge();
};

// Array.prototype.mergeSort = function(cb) {
//   //base case
//   if (this.length <= 1) {
//     return this;
//   }
//   let mid = Math.floor(this.length / 2);
//   let left = this.slice(0,mid);
//   let right = this.slice(mid);
//   let sortedLeft = left.mergeSort(cb);
//   let sortedRight = right.mergeSort(cb);
//   return _merge();
//   function _merge() {
//     let merged = [];
//     while (sortedLeft.length !== 0 && sortedRight.length !== 0) {
//       if (cb(sortedLeft[0], sortedRight[0])) {
//         merged.push(sortedLeft.shift());
//       } else {
//         merged.push(sortedRight.shift());
//       }
//     }
//     return merged.concat(sortedLeft, sortedRight);
//   }
// }

let arr = [5, 1, 2, 45, 1, 23, 99, 22, 22];
let sorted = arr.mergeSort((a, b) => a < b);
console.log(sorted);