function crypto(password) {
  if (password.length < 5 || password === '') {
    console.log('Пароль слишком короткий. Минимальная длина пароля не менее 5 символов');
  }

  const splitedPassword = password.split('');
  const lenghtPassword = Math.floor(splitedPassword.length / 2);

  const firstPartOfPassword = splitedPassword.slice(1, lenghtPassword).reverse();
  const secondPartOfPassword = splitedPassword.slice(lenghtPassword).reverse();
  const protectPassword = firstPartOfPassword.join('') + splitedPassword[0] + secondPartOfPassword.join('');
  return protectPassword;
}

function check(protectPassword, originalPassword) {
  if (!protectPassword || !originalPassword) {
    return false;
  }
  return crypto(originalPassword) === protectPassword;
}

console.log(crypto('password'));
console.log(check('ssapdrow', 'password'));