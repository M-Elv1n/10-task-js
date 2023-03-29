//! 1 search

// const arr = [1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4, 5]

// function diffArr(arr, arr2) {
//     let arrNew = arr.length > arr2.length ? arr : arr2

//     for (let i = 0; i < arrNew.length; i++) {
//         if (arr[i] !== arr2[i]) {
//             return arrNew[i]
//         }

//     }
// }

// console.log(diffArr(arr, arr2))

//! 2 liner search

// const array = [1, 2, 3, 4, 0, 23, 54, 77, 95, 30]

// function linerSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linerSearch(array, 23))
// console.log(linerSearch(array, 99))


//! 3 sorted search

// const array = [1, 2, 3, 4, 23, 54, 77, 95, 123]

// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let middleIndex = Math.floor((left + right) / 2)

//         if (arr[middleIndex] === target) {
//             return middleIndex
//         }else if(target > arr[middleIndex]){
//             left = middleIndex + 1
//         }else{
//             right = middleIndex - 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch(array, 3))





//! 4 recursive search

const array = [1, 2, 3, 4, 23, 54, 77, 95, 123]
let count = 0

function recursiveSearch(array, target) {
    if(count > array.length - 1) return -1
    if (array[count] === target) {
        return count
    }
    else{
        count++
        return recursiveSearch(array, target)
    }
}

console.log(recursiveSearch(array, 235555))