
// Шейкер сортировка или коктель сортировка
// не верь википедии! Она врет! 
// бери код с JAVA и переноси логику

let array = [4, 2, 6, 3, 7, 3, 1, 0, 4, 9, 10, 3];
console.log();

shakerSort(array);
function shakerSort(array) {
    console.log('first array :', array);

    let left = 0; //начало массива
    let right = array.length - 1; //конец массива
    let temp; //буфер

    do {
        for (let i = left; i < right; i++) {

            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        // console.log('array :', array);
        right--;

        for (let i = right; left < i; i--) {

            if (array[i] < array[i - 1]) {
                temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
            }
        }
        //console.log('array :', array);
        left++;

    } while (left < right);
return array;
// console.log('array :', array);
}