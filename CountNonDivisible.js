function solution(a) {
  const N = a.length;
  const results = [];
  const divisors = {};
  for(let i = 0; i < N; i++) {
    if (divisors[a[i]] == undefined) {
      divisors[a[i]] = {c:1};
    } else {
      divisors[a[i]]['c'] += 1;
    }
  }
  for(let i = 0; i < N; i++) {
    if (divisors[a[i]]['d'] == undefined) {
      let numNonDiv = N;
      const max = Math.floor(Math.sqrt(a[i]));
      for(let j = 1; j <= max; j++) {
        if (a[i] % j == 0) {
          if (divisors[j] != undefined) {
            numNonDiv -= divisors[j]['c'];
          }
          const p = a[i] / j;
          if (divisors[p] != undefined && p != j) {
            numNonDiv -= divisors[p]['c'];
          }
        }
      }
      divisors[a[i]]['d'] = numNonDiv;
    }
    results.push(divisors[a[i]]['d']);
  }
  return results
}
