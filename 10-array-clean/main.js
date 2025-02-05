const array = [-1, 2, 10, 0, 26, 39, 75, 11, -3, 5];

function DeleteElement(num) {
  return (num > 5 && num < 8) || (num <= 0) || (num % 3 === 0);
}


function arrayFilters(array, fnDeleteElement) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    const indexDelete = fnDeleteElement(array[i]);
    if (indexDelete) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

const i = arrayFilters(array, DeleteElement);
console.log(i);