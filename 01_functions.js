function sayMyName() {
    console.log('H')
    console.log('I');
    console.log('T');
    console.log('E');
    console.log('S');
    console.log('H');

}


// sayMyName()

// parameters
function addTwoNumbers(num1, num2){
    return num1 + num2
}

// arguments 
addTwoNumbers(2,4)

const result = addTwoNumbers(2,6)

console.log(result);


function loggedInMessage( username = 'sam' ){

    if ( !username ){
        console.log('Please login with username');
        return
    }
    return `${username} just logged in`
}



console.log(loggedInMessage());


