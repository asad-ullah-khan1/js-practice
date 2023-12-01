// Immediately Invoked Function Expressions - IIFE


// function chai () {
//     console.log(`DB CONNECTED`);
// }

// chai()


(function chai(){
    // named IIFE
    console.log(`DB Connected!`);
})();


( () => {
    // unnamed IIFE
    console.log('another function log');
} )();



( (name) => {
    console.log(`hello, and welcome MR.${name}`);
} )('asad')