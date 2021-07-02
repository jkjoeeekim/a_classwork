const { prototype } = require("events");

// sum using arguments
function sum() {
  let count = 0;
  for (let i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
};

// let sums = sum(1, 2, 3, 4);
// console.log(sums);

// sum using `...` rest operator
function sum2(num1, ...nums) {
  let count = num1;
  nums.forEach((num) => {
    count += num;
  });
  return count;
}

// let sums2 = sum2(1, 2, 3, 4);
// console.log(sums2);


// myBind
Function.prototype.myBind = function (context) {
  let that = this;
  let outerArgs = Array.from(arguments).slice(1);

  return function () {
    let innerArgs = Array.from(arguments);
    that.apply(context, outerArgs.concat(innerArgs));
  };
};

// myBind2
Function.prototype.myBind2 = function (context, ...outerArgs) {
  let that = this;

  return function (...innerArgs) {
    that.apply(context, outerArgs.concat(innerArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind2(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind2(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// markov.says.myBind2(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// const notMarkovSays2 = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// notMarkovSays2("meow", "me");
// // Pavlov says meow to me!
// true


//sumThree Curried Version

// Hint: curriedSum(numArgs) should:

// Define an empty array, numbers.
// Defines a function, _curriedSum that:
// Closes over numArgs and numbers.
// Takes a single number as an argument.
// Appends this to numbers each time.
// If numbers.length === numArgs, it sums the numbers in the array and returns the result.
//   Else, it returns itself.
// Returns _curriedSum.
// If you're confused, think of it this way: _curriedSum keeps collecting arguments and returning itself 
// until it has enough arguments, at which point it actually does the required work of summing.

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    if (numbers.length === numArgs - 1) {
      let count = num;
      numbers.forEach((num) => { count += num; });
      console.log(count);
      return count;
    } else {
      numbers.push(num);
      return _curriedSum;
    }
  };
};

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:

// const sum3 = curriedSum(4);
// sum3(5)(30)(20)(1); // => 56



// Monkey patching curriedSum ES5
Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let fnc = this;
  function _currySum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return fnc(...numbers);
      // return fnc.apply(null, numbers);
      // return fnc.call(null, ...numbers);
    } else {
      return _currySum;
    }
  };

  return _currySum;
};

// Monkey patching curriedSum2 ES6
Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  let _currySum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return this(...numbers);
    } else {
      return _currySum;
    }
  };

  return _currySum;
};

const curryAdd = function (...arr) {
  console.log(arr);
  let count = 0;
  arr.forEach((ele) => {
    count += ele;
  });
  return count;
};

let addAll = curryAdd.curry(4);
console.log(addAll(5)(30)(20)(1)); // => 56

let addAll2 = curryAdd.curry2(4);
console.log(addAll2(5)(30)(20)(1)); // => 56