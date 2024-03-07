// Given this function:
// REFACTORED:
const filterOutOdds = (...vals) => vals.filter((num) => num % 2 === 0);



// findMin
const findMin = (...vals) => vals.reduce((lowest, next) => (next < lowest ? next: lowest));



// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});



// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
    const argsDoubled = args.map((num) => num * 2);
    return [...arr, ...argsDoubled];
}



// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const roll = Math.floor(Math.random() * items.length);
    return [...items.slice(0, roll), ...items.slice(roll + 1)];
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}



/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}




/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}




/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
