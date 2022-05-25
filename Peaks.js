function solution(a) {
    const peaks = [];
    const n = a.length;
    let prevPeak = -1;
    let numPeaks = 0;
    for(let i = 1; i < n-1; i++) {
        if (a[i] > a[i-1] && a[i] > a[i+1]) {
            for(let j = prevPeak + 1; j <= i; j++) {
                peaks.push(i);
            }
            numPeaks += 1;
            prevPeak = i;
        }
    }

    if (numPeaks <= 1) {
        return numPeaks;
    }

    let result = 0;
    for(let i = 1; i <= numPeaks; i++) {
      if (n % i > 0) {
        continue;
      }
      const chunkSize = n/i;

      let lastPeak = 0;
      let good = true;
      for(let j = 0; j < n; j += chunkSize) {
        if (peaks[j] != peaks[j+chunkSize] && peaks[j+chunkSize] != lastPeak) {
          lastPeak = peaks[j + chunkSize];
        } else {
          good = false;
          break;
        }
      }
      if (good) {
        result = i;
      }
    }
    return result; 
}
