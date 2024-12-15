
function converterValue(sum, value, targerValue) {
  
  const USD = 107.74;
  const EUR = 114.31;
  const GBP = 136.63;

  switch (value) {
    case 'USD':
      switch (targerValue) {
        case 'RUB':
          return (sum * USD).toFixed(2);
        case 'EUR':
          return (sum * EUR / USD).toFixed(2)
        case 'GBP':
          return (sum * GBP / USD).toFixed(2)
        default:
          return null;
      }
    case 'EUR':
      switch (targerValue) {
        case 'RUB':
          return (sum * EUR).toFixed(2);
        case 'USD':
          return (sum * USD / EUR).toFixed(2);
        case 'GBP':
          return (sum * GBP / EUR).toFixed(2);
        default:
          return null;
      }
    case 'GBP':
      switch (targerValue) {
        case 'RUB':
          return (sum * GBP).toFixed(2);
        case 'EUR':
          return (sum * EUR / GBP).toFixed(2);
        case 'USD':
          return (sum * USD / GBP).toFixed(2)
        default:
          return null;
      }
    case 'RUB':
      switch (targerValue) {
        case 'USD':
          return (sum / USD).toFixed(2)
        case 'EUR':
          return (sum / EUR).toFixed(2)
        case 'GBP':
          return (sum / GBP).toFixed(2)
        default:
          return null;
      }
    default:
      return null
  }
}

console.log(converterValue(1000, 'RUB', 'GBP'));