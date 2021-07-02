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

  return function() {
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

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
const notMarkovSays2 = markov.says.myBind2(pavlov);
notMarkovSays("meow", "me");
notMarkovSays2("meow", "me");
// Pavlov says meow to me!
// true