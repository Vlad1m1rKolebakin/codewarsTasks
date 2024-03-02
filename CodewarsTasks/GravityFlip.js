function flip(d,a){
    if (d=== "R"){
       const newA =  a.sort((a,b) => a-b);
       return newA
    }
    if (d=== "L"){
       const newA =  a.sort((a,b) => b-a);
       return newA
    }
   
}


console.log(flip('L' ,[1, 4, 5, 3, 5]));

