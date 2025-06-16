const date = ['10-02-2022', 'test', '11/12/2013', '00/13/2022', '00/11/t1st'];

const regString = /[a-zA-Zа-яА-ЯёЁ]/;

function filterWithOutWords(arayDate) {
  return arayDate.filter(elArray => !regString.test(elArray));
}


function correctDate(filteredDates) {
  let day, month, year;
  const arrayValidDate = [];
  for (let element of filteredDates) {
    if (element.includes('/')) {
      [day, month, year] = element.split('/');
    }
    if (element.includes('-')) {
      [month, day, year] = element.split('-');
    }
    if (Number(day) <= 0 || Number(day) > 31 || Number(month) <= 0 || Number(month) > 12 || Number(year) < 1900) continue;
    arrayValidDate.push(element);
  }
  return arrayValidDate;
}

const flDates = filterWithOutWords(date);
console.log(isLeapYear(flDates));

console.log(correctDate(flDates));