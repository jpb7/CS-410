const getPrimes = () => {
  let i = 2;
  for (; i < 101; ++i) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); ++j) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
