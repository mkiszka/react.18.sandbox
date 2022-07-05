require('console');
function calculate(a, b) {
    return new Promise((resolve, reject) => {
        if (Math.round(Math.random()) == 1) {
            return a + b;
        }
        return a + b;
        //reject(new Error("Screwed"));
    })
}
console.log("a");

calculate(4, 5).then(value => console.log(value));

//https://developer.chrome.com/blog/new-in-devtools-84/#promises

function wait(ms) {

    return new Promise((resolve) => setTimeout(resolve, ms));
}

function delayedErrors(ms, message) {
    
    
    return new Promise((resolve, reject) => { setTimeout(reject(new Error(message), ms)); });
}

function isEven(num) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(num)) {
            reject(new Error(`${num} is not an integer`))
        }
        if (num % 2 == 0) {
            resolve(true);
        } else {
            resolve(false)
        }
    });
}

function slowIsEven(num, ms = 1000) {
    return wait(ms).then(isEven(num));
}

function slowIsEven(num, ms = 1000) {
    return wait(ms).then(()=> {return isEven(num)});
}

