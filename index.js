// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна

//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false
//compare('ssaadd', 'asd') ->false


const compare = (value1, value2) => {
    if (value1.length !== value2.length) {
        return false;
    }

    const arr1 = value1.toLowerCase().split('');
    const arr2 = value2.toLowerCase().split('');

    const storage = new Set();

    arr1.forEach((value) => {
        storage.add(value);
    })

    let result = true;

    arr2.forEach((value) => {
        if (storage.has(value) === false) {
            result = false;
        }
    })

    return result;
}

console.log(compare('test', 'text'));
console.log(compare('Mom', 'omm'));
console.log(compare('asd', 'Sad'));
console.log(compare('asd', 'ssaadd'));
console.log(compare('ssaadd', 'asd'));





