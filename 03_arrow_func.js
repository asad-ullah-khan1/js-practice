const user = {
    username: "asadkhan602",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        // this keyword is a reference of current context
    }
}

// user.welcomeMessage()
// user.username = "hitesh"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = 'asadkhan602'
//     console.log(this.username);
// }


// const chai = () => {
//     let username = 'asadkhan602'
//     console.log(this);
// }

// chai()


// more arrow 

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => (num1 + num2 )

// console.log(addTwo(3,4));


const addOne = (num1, num2 ) => ({username:"asadkhan"})

console.log(addOne(2,3));