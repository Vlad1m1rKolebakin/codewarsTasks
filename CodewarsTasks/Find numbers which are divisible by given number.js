function divisibleBy(numbers, divisor){
const newarr =[];
 numbers.map((item ) => {
    if(item%divisor === 0){
        newarr.push(item)
    }
})
return newarr

}


const arr = [1,2,3,4,5,6];

console.log(divisibleBy(arr, 2));