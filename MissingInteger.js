function solution(a) {
  const seen = [];
  const n = a.length;
  let min = 1;
  for(let i = 0; i < n; i++) {
    if (a[i] > 0) {
      seen[a[i]] = 1;
      if (a[i] == min) {
        while(seen[++min]);
      }
    }
  }
  return min;
}
