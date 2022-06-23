const correct = (str) => {
  const total = str.split('');
  for (let i = 0; i < total.length; i++) {
    if (total[i] === '5') {
      total[i] = 'S';
    } 
    if (total[i] === '0') {
      total[i] = 'O';
    } 
    if (total[i] === '1') {
      total[i] = 'I';
    } 
  }
  return total.join('');
}

console.log(correct("51NGAP0RE"));
