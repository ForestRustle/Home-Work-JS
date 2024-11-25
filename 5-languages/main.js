const selectuserLanguage = prompt('Выберите язык: EN, DE, JP, FR, ESP');

switch (selectuserLanguage) {
  case 'EN':
    console.log('Hello, World!');
    break;
  case 'DE':
    console.log('Hallo, Welt!');
    break;
  case 'JP':
    console.log('こんにちは、世界!');
    break;
  case 'FR':
    console.log('Bonjour, le monde!');
    break;
  case 'ESP':
    console.log('Hola, mundo!');
    break;
  default:
    console.log('Приветствую !');
    break;
}