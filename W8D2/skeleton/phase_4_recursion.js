function range(start, end) {
    if (start === end) {
        return [end];
    }

    let arr = [];
    let prevArr = (range((start + 1), end));
    arr = prevArr;
    arr.unshift(prevArr[0] - 1);
    return arr;
}

// console.log(range(1,10));

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    // currentEle = arr.shift();
    sum = arr.shift() + sumRec(arr);
    return sum;
}

// console.log(sumRec([1,2,3]));

function exponent(base, exp) {
    if (exp === 1) { 
        return base;
    } else if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        return null;
    }
    let num 
    if (exp % 2 === 0) {
        num = exponent(base, exp / 2) ** 2;

    } else {
        num = base * (exponent(base, (exp -1) / 2) ** 2);
    }

    // let num = base * exponent(base, exp - 1);
    return num;
} 

// console.log(exponent(2, 3));

function fibonacci(n) {
    if (n === 2) {
        return [0, 1];
    } else if (n === 1) {
        return [0];
    } else if (n < 1) {
        return null;
    }

    let fibs = [];
    fibs = fibs.concat(fibonacci(n - 1));
    let last = fibs[fibs.length - 1];
    let secondLast = fibs[fibs.length - 2];
    fibs = fibs.concat([last + secondLast]);
    // debugger
    return fibs;
}

console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(6));