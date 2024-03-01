function powersOfTwo(n){
    const arr = [];
    for (let i = 0; i < n+1; i++) {
        const res = 2**i;
        arr.push(res);
    
    };
return arr
};





console.log(powersOfTwo(4));