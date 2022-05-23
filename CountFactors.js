function solution(n) {
  const max = Math.sqrt(n);
  let factors = Math.round(max) == max ? 1 : 0;
  for(let i = 1; i < max; i++) {
    if (n % i == 0) {
      factors += 2;
    }
  }
  return factors;
}
