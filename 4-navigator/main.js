const positionLatitude = 50;
const positionLongitude = 124;
const destinationLatitude = 320;
const destinationLongitude = 44;

function myPosition(x1, y1, x2, y2) {
  let result = Math.sqrt(((x2 - x1) ** 2) + (y2 - y1) ** 2);
  return result.toFixed(2);
   
}
console.log(myPosition(positionLatitude, positionLongitude, destinationLatitude, destinationLongitude));

