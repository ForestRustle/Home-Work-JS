const card = '4561-2612-1234-5464'; // false
const card2 = '4839 1488 0343 6467'; //false
const card3 = '4539 1488 0343 6467'; //true

function Lunas(cardNumber) {
  const clearCard = cardNumber.replaceAll('-', '').replaceAll(' ', '');

  let result = 0;
  let isDouble = true;
  for (let i = 0; i < clearCard.length; i++) {
    let multiplication = parseInt(clearCard[i]);
    if (isDouble) {
      multiplication *= 2;
      if (multiplication > 9) {
        multiplication -= 9;
      }
    }
    result += multiplication;
    isDouble = !isDouble;
  }
  return result % 10 === 0;
}
console.log(Lunas(card));
console.log(Lunas(card2));
console.log(Lunas(card3));