function getAverage(marks){

    const num = marks.reduce((acc,item) => {
        return (acc+item)
    })

return Math.floor(num/ marks.length)
};



console.log(getAverage([1,5,87,45,8,8]));


const numm = 25.79999999;
console.log(numm.toFixed(4));