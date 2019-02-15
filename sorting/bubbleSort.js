

// Сортировки http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki 
// https://habr.com/ru/post/204600/ - отсюда взяли сортировки RRScope


// Пузырьковая сортировка

let array = [4, 2, 6, 3, 7, 3, 1, 0, 4, 9, 10, 3];

bubbleSort(array)
function bubbleSort(array) {
    // console.log('array :', array);
    let length = array.length; // длина массива
    for (let i = 0; i < length - 1; i++) {
        for (let j = 1; j < length; j++) {
            if (array[j - 1] > array[j]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
        //console.log(array);
    }
    return array;
}