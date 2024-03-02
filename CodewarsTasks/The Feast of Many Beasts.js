// ("great blue heron", "garlic naan"), true;

function feast(beast, dish) {
    const res = beast.charAt(0) + beast.charAt( beast.length-1)
    const res2 = dish.charAt(0) + dish.charAt( dish.length-1);
    if(res === res2){
        return true
    } else{
        return false
    }

};




console.log(feast("brown bear", "bear claw"));


