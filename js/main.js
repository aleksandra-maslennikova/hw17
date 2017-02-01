/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2] лидеры 17, 5 и 2.
 *
 *
 * */
function solution(arr) {
  //debugger
  let i = 0;
  let newArr = [];
  for (; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        break
      } else if (j == arr.length - 1) {
        newArr.push(arr[i]);
      } else {
        continue
      }
    }
  }
  newArr.push(arr[i]);
  return newArr
}

console.log(solution([16, 17, 4, 3, 5, 2]));  // [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]


