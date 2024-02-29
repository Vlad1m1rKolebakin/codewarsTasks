function howMuchILoveYou(nbPetals) {
    const arr = [ 'I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    if(nbPetals%6 ===0){
        return arr[5]
    }
    if(nbPetals>6){
        return arr[nbPetals%6-1]
    }else {
        return arr[nbPetals-1]
    }

   
}


console.log(howMuchILoveYou(18));