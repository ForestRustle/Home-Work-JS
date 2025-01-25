
const test = {
  search: 'Вася',
  take: 10,
};

function toQueryString(object) {
  const arrData = [];
  for (const [key, value] of Object.entries(object)) {
    arrData.push (`${key}=${value}`)
  }
  return arrData.join('&')
}

console.log(toQueryString(test));