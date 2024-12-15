const arrayOFNumbers = [1, 40, -5, 10, 0];
function sortedArray(notSortedArray) {
  for (let i = 0; i < notSortedArray.length; i++) {
    for (let j = 0; j < notSortedArray.length; j++) {
      if (notSortedArray[j] > notSortedArray[j + 1]) {
        let sorted = notSortedArray[j];
        notSortedArray[j] = notSortedArray[j + 1];
        notSortedArray[j + 1] = sorted;
      }
    }
  }
  return notSortedArray;
}

console.log(sortedArray(arrayOFNumbers));