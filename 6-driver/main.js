const hasLicense = true;
const age = 18;
const isDrunk = true;

const canDrive = age >= 18 && hasLicense && !isDrunk ? console.log('Может') : console.log('Не может');