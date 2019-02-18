
// Быстрая сортировка
// http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki
// https://proglib.io/p/sort-algorithms/
// http://qaru.site/questions/367260/javascript-quicksort

console.log(' quickSort ');
const array = [4, 2, 6, 3, 7, 3, 1, 0, 4, 9, 10, 3];
console.log('Sorting :', quickSort(array));
function quickSort(array) {
    // const arrayLength = array.length;
    if (array.length < 2) return array;

    const pivot = array[0]; // точка опоры
    // const pivot = array[Math.floor(Math.random() * arrayLength)]; // точка опоры
    // console.log('pivot :', pivot);
    let left = [], midst = [], right = []; // левая, средняя и правая части массива

    for (let a of array) {
        if (a < pivot) {
            left.push(a);
        } else if (a > pivot) {
            right.push(a);
        } else {
            midst.push(a);
        }
    }
    // console.log('left:', left + '   midst:', midst + '   right:', right);
    // Рекурсия, используем оператор распространения ES6, чтобы преобразовать набор в массив.
    // http://qaru.site/questions/11603/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
    return [
        ...quickSort(left),
        ...midst,
        ...quickSort(right)
    ];
}
