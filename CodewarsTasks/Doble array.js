function maps(x){

    const newArray =  x.map((item) => {
       return item*2
    });
    return newArray

};



console.log(maps([1,2,3]));