//w argumentach nazywane rest operator


let prevTimeboxes =
    [
        { uid: 'dd-www-ddd', title: 'Wywołanie eventów', totalTimeInMinutes: 3, isEditable: false },
        { uid: 'eee-kkkk-ddd', title: 'KP-3034 Migracja z ver 1.14 do 1.15 usuwa powiązanie pacjent pracownik.', totalTimeInMinutes: 20, isEditable: false },
        { uid: 'wdf-hjl-ded', title: 'KP-3104 Deploy webserwisu zamówień dla 1.15', totalTimeInMinutes: 20, isEditable: false },
    ];


const updateElement = (prevTimeboxes, id, newValue) => {
    return prevTimeboxes.map(
        (actTimebox, actId) => { return actId === id ? { ...actTimebox, totalTimeInMinutes: newValue } : actTimebox }
    )
}

const updateElement_v2 = (prevTimeboxes, id, newValue) => {
    return Object.assign([], prevTimeboxes, { [id]: { ...prevTimeboxes[id], totalTimeInMinutes: newValue } });
    
}

// const updateElement_v3 = (prevTimeboxes, id, newValue) => {
//     return [...prevTimeboxes, [id]: { ...prevTimeboxes[id], totalTimeInMinutes: newValue }]    
// }

console.log(prevTimeboxes);
console.log(updateElement(prevTimeboxes, 1, 195));
console.log(updateElement_v2(prevTimeboxes, 1, 222));
let a = 1;


/*
//https://stackoverflow.com/questions/45673783/replace-array-entry-with-spread-syntax-in-one-line-of-code
let a = [
    { id: 4, title: 'Ala ma kota', boolin: true },
    { id: 5, title: 'Piotr ma patyk', boolin: false },
    { id: 6, title: 'Asia ma piłkę', boolin: false}
]
console.log(a);
let b = [{ id: 6, title: 'Asia ma piłkę', boolin: false}, ...a ]
console.log(b);

let c = 1;
*/