function removeEveryOther(arr){
    const newArr =[];
    for (let i = 0; i < arr.length; i++) {
        if(i%2 === 0 || i === 0){
            newArr.push(arr[i])
        }
        
    }

  return newArr;
}    

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));