
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
            resolve(false);
        }
    });
}

async function slowIsEven(num, ms = 1000) {
    await wait(ms);
    return await isEven(num);
} 

async function main() {

    const is2Even = await slowIsEven(2, 2000);
    console.log(is2Even ? '2 is even' : '2 is odd');
    const is5Even = await slowIsEven(5, 5000);
    console.log(is5Even ? '5 is even' : '5 is odd');
}

async function main_modified() {

    

    const a = slowIsEven(2, 2000).then((is2Even) => console.log(is2Even ? '2 is even' : '2 is odd'));
    const b = slowIsEven(5, 5000).then((is5Even) => console.log(is5Even ? '5 is even' : '5 is odd'));
    
    await b;    
    await a;
    
    
}
async function checkAwaitBeforeString() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#conversion_to_promise
    const a = await 20;
    console.log("tesT");
    console.log(typeof(a));
}
//main();
//main_modified();
//checkAwaitBeforeString();

async function f3() {
    var y = (Promise) await 20;
    console.log(y); // 20
  }
  
  f3();