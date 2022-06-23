// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => {
  let total = 0;
  if (b < a) [a, b] = [b, a];
  for (let i = a; i <= b; i ++) {
    total += i;
    console.log(total);
  }
  return total;
}

console.log(getSum(6, -2));