// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = (world) => {
  const result = [];
  const arr = world.split(' ');
  for (const item of arr) {
    for (let i = 1; i <= 9; i++) {
      if (item.includes(String(i))) {
        result[i - 1] = item;
      }
    }
  }
  return result.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));