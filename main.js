const arrayDiv = document.querySelector(".array")
const resTaskOne = document.querySelector(".array__resMax")
const resTaskTwo = document.querySelector(".array__resBubble")
const binaryNumber = document.querySelector("#binary__num")
const resTasFour = document.querySelector(".array__resBinary")
const resTaskSix = document.querySelector(".array__resPalindrom")

let arrayNum = [88, 7, 15, 9, 8, 9, 8, 5, 10, 11, 15, 18]
arrayDiv.innerHTML = arrayNum

//1)Нахожденик максимального элемента в массиве.
function arrayMax(array) {
  const ln = array.length
  let max = array[ln - 1]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
resTaskOne.innerHTML = arrayMax(arrayNum)

//2) Реализовать функцию сортировки пузырьком

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let buff = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = buff
      }
    }
  }
  return arr
}
resTaskTwo.innerHTML = bubbleSort(arrayNum)

//3)

function binarySearch(value, array) {
  let first = 0
  let last = array.length - 1
  let position = "Такого элемента нет"
  let found = false
  let middle

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2)
    if (array[middle] == value) {
      found = true
      position = middle
    } else if (array[middle] > value) {
      last = middle - 1
    } else {
      first = middle + 1
    }
  }
  return position
}

function searchIdNum() {
  console.log(binaryNumber.value)
  resTasFour.innerHTML = binarySearch(binaryNumber.value, arrayNum)
}

//6) Проверка на полиндром строки
function palindromeCheked(text) {
  const lastIndex = text.length - 1
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[lastIndex - i]) {
      return (resTaskSix.innerHTML = "Не полиндром")
    }
  }
  return (resTaskSix.innerHTML = "Это полиндром")
}
