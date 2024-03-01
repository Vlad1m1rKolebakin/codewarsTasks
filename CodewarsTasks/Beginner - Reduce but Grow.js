
function grow(x){

    const sum = x.reduce(function (currentSum, currentNumber) {
      return currentSum * currentNumber
    }, 1)
    return sum
};

