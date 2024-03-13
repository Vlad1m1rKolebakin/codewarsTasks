function sumMix(x){
    const sum = x.reduce((acc,item) => {
        if(typeof item === 'string'){
           item = +item
        }
       return acc+ item
    },0)
    return sum
}



console.log(sumMix([9, 3, '7', '3']));

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);