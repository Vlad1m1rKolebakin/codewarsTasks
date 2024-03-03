function positiveSum(arr) {
 return arr.filter(number => number>0).reduce((acc,item)=> {
    return acc+item
}, 0)
};


console.log(positiveSum([1,-2,3,4,5]));

