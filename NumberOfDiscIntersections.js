function solution(a) {
  const opened = {};
  const closed = {};
  for (let i = 0; i < a.length; i++) {
    const left = Math.max(i - a[i], 0);
    const right = i + a[i];
    opened[left] = (opened[left] || 0) + 1;
    closed[right] = (closed[right] || 0) + 1;
  }

  let open = (opened[i] || 0) - (closed[i] || 0);
  let pairs = open * (open - 1)/2;
  for (let i = 1; i < a.length; i++) {
    if (opened[i] > 0) { 
      pairs += opened[i] * (opened[i] - 1) / 2;
      pairs += opened[i] * open;
      if (pairs > 10000000) {
        return -1
      }
    }
    open += (opened[i] || 0) - (closed[i] || 0);
  }
  return pairs;
}
