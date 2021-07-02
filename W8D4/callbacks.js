const { read } = require('fs');

// Using Date() to create a simple clock
class Clock {
  constructor() {
    this.date = new Date();
    const [hours, minutes, seconds] = [this.date.getHours(), this.date.getMinutes(), this.date.getSeconds()];
    this.time = {
      hour: hours,
      minute: minutes,
      second: seconds
    };
    this.printTime();
  }

  printTime() {
    console.log(`${this.time['hour']}h:${this.time['minute']}m:${this.time['second']}s`);
  }

  // using ES6 syntax, the scope of 'this'(clock object) persists through the arrow function.
  _tick() {
    setInterval(() => {
      console.log(this);
      this.time['second']++;
      if (this.time['second'] === 60) {
        this.time['second'] = 0;
        this.time['minute']++;
      };
      if (this.time['minute'] === 60) {
        this.time['minute'] = 0;
        this.time['hour']++;
      }
      if (this.time['hour'] === 25) {
        this.time['hour'] = 0;
      }
      this.printTime();
    }, 1000);
  }

  // using ES5 syntax, the scope of 'this'(clock object) must be defined outside of setInterval().
  _tick2() {
    let that = this;
    setInterval(function () {
      console.log(that);
      that.time['second']++;
      if (that.time['second'] === 60) {
        that.time['second'] = 0;
        that.time['minute']++;
      };
      if (that.time['minute'] === 60) {
        that.time['minute'] = 0;
        that.time['hour']++;
      }
      if (that.time['hour'] === 25) {
        that.time['hour'] = 0;
      }
      that.printTime();
    }, 1000);
  }
}

// const clock = new Clock();
// clock._tick();
// clock._tick2();


// Using readline to get user prompt
// readline = require('readline');
// reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// simple adding numbers function using reader
let addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft > 0) {
    console.log(`Current sum: ${sum}`);
    reader.question('Enter a number to add: \n', (number) => {
      sum += parseInt(number);
      numsLeft--;
      console.log(`New sum: ${sum}\n\n`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// my absurd bubble sort method using reader
let askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Is ${el1} greater than ${el2}?\n`, (answer) => {
    if (answer === 'yes') {
      callback(true);
    } else if (answer === 'no') {
      callback(false);
    } else {
      console.log('Not a valid response, answer yes or no');
      askIfGreaterThan(el1, el2, callback);
    }
  });
};

let innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    let first = arr[i];
    let second = arr[i + 1];
    let madeSwap;
    askIfGreaterThan(first, second, bool => {
      console.log(arr);
      if (bool) {
        madeSwap = bool;
        arr[i] = second;
        arr[i + 1] = first;
      }
      console.log(arr);
      innerBubbleSortLoop(arr, i + 1, madeSwap, outerBubbleSortLoop);
    });
  }
};

let absurdBubbleSort = (arr, sortCompletionCallback) => {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
      reader.close();
    }
  }
  outerBubbleSortLoop(true);
};

// absurdBubbleSort([4, 2, 1, 4, 3, 23, 5], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


// create my own bind function
Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"



// Create myThrottle and myDebounce
Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;

  return () => {
    if (!tooSoon) {
      tooSoon = true;
      this();
      setTimeout(() => {
        tooSoon = false;
      }, interval);
    }
  }
};

class Neuron {
  fire() {
    console.log("Firing!");
  }
}
const neuron = new Neuron();
neuron.fire = neuron.fire.myThrottle(500);
const interval = setInterval(() => {
  neuron.fire();
}, 10);

// const neuron = new Neuron();
// // When we create a new Neuron,
// // we can call #fire as frequently as we want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire;
// }, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// }
// const neuron = new Neuron();
// neuron.fire;