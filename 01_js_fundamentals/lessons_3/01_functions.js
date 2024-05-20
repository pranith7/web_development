function printVar(number1,number2){
    let num;
    if(typeof number1 == typeof number2){
        num = number1 + number2;
        return num;
    }
    return num;
}


// console.log(printVar(4,5));
function loginUserMessage(username = 'admin'){
    if(!username){
        return 'Please enter a username';
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage('pranith'));


function calculateCartPrice(val1, ...num){
    return num
}

console.log(calculateCartPrice(200,400,800));