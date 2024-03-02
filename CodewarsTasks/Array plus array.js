function arrayPlusArray(arr1, arr2) {
    sum1 = arr1.reduce((acc, item) => acc+item);
    sum2 = arr2.reduce((acc, item) => acc+item);
    return sum1+sum2;
};



const arr1 = [1,2,3];
const arr2 = [4,5,6];


console.log(arrayPlusArray(arr1, arr2));
