
const test = {
  search: 'Вася',
  take: 10,
};

function toQueryString(object) {
  const keys = Object.keys(object)
  const values = Object.values(object)
  return keys.map((key, indexValue)=> `${key}${values[indexValue]}`).join('&')
  
}

console.log(toQueryString(test));