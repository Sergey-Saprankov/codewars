// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

const validatePIN = pin => {
  const temp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const total = pin.split('').filter(elem => temp.includes(elem));
  console.log(total);
  return total.length === pin.length && (pin.length === 4 || pin.length === 6) ;
}

console.log(validatePIN("1234"));