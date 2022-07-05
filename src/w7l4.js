
function mysleep(ms, onSuccess, onError) {
    if (ms < 5 || ms > 4000) {
        onError(new Error("Out of range"));
    }
    setTimeout(() => onSuccess(),ms);
}

var ms = 3
mysleep(ms, 
    () => console.log("Obudziłem się ! JEA!"),
    (error)=>console.log(error));