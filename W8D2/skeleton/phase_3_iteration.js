Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let first = this[i];
        let second = this[i + 1];
        this[i] = second;
        this[i + 1] = first;
        sorted = false;
      };
    };
  };

  return this;
};

arr = [5,22,5,12,1,9,4,345];
// console.log(arr.bubbleSort());

String.prototype.substrings = function() {
  const subs = [];
  let letters = this.split("");
  
  letters.forEach((ele, idx) => {
    let str = ele;
    for (let i = idx + 1; i < letters.length; i++) {
      str = str.concat(letters[i]);
      subs.push(str);
    }
  });

  return subs;
}


// console.log('academy'.substrings());