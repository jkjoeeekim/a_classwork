Array.prototype.uniq = function() {
    let newArray = [];

    this.forEach((ele) => {
        if (!newArray.includes(ele)) {
            newArray.push(ele)
        }    
    });
    return newArray
}

Array.prototype.twoSum = function() {
    let pairs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++ ) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }   
    return pairs;
} 

Array.prototype.transpose = function() {
    let newArr = [];

    this.forEach((arr, i) => {
        let newRow = [];
        arr.forEach((ele, j) => {
            newRow.push(this[j][i]); 
        });
        newArr.push(newRow);
    });
    return newArr;
}