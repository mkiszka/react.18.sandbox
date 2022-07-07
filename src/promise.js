
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

function slowIsEven(num, ms = 1000) {
    return wait(ms).then(() => { return isEven(num) });
}

async function slowIsEven(num, ms = 1000) {
    await wait(ms);
    return await isEven(num);
}
/*
Wywołanie: 
const result = await slowIsEven(num, ms = 1000);

spowoduje, że w result mamy wartość boolową obliczaną w promisach z isEven

}
*/

function timeout_v1(promise, ms) {
    const rejection = new Promise((resolve, reject) => { setTimeout(() => reject('Nie udało się'), ms) });
    return Promise
        .race(
            [
                promise,
                rejection
            ]
        )
        .then((value) => { return value; }, (rejectValue) => { throw new Error(rejectValue) });
}

function timeout_v2(promise, ms) {

    return Promise
        .race(
            [
                promise,
                delayedErrors(ms, 'Nie udało się')
            ]
        )
        .then((value) => { return value; });
}

function timeout_v3(promise, ms) {

    return Promise
        .race(
            [
                promise,
                delayedErrors(ms, 'Nie udało się')
            ]
        )
        .then((value) => { return value; }, (rejectValue) => Promise.reject(rejectValue));
}

//https://www.geeksforgeeks.org/reject-vs-throw-promises-in-javascript/
console.log("test");