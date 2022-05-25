// binary search
function solution(a) {
    const peaks = [];
    let prevPeak = -1;
    let numPeaks = 0;
    for(let i = 1; i < a.length-1; i++) {
        if (a[i] > a[i-1] && a[i] > a[i+1]) {
            for(let j = prevPeak + 1; j <= i; j++) {
                peaks.push(i);
            }
            numPeaks += 1;
            prevPeak = i;
        }
    }

    if (numPeaks <= 2) {
        return numPeaks;
    }

    let s = 0;
    let e = Math.min(numPeaks, Math.floor(Math.sqrt(peaks[peaks.length - 1] - peaks[0])) + 1);
    let lastFlag = peaks[peaks.length - 1];
    let result = 0;
    while (s <= e) {
      let m = s + Math.floor((e-s)/2);
      let flag = peaks[0]
      let remaining = m - 1;
      while(remaining > 0 && flag <= lastFlag && remaining * m <= lastFlag) {
        flag = peaks[flag + m];
        if (flag == undefined) {
          break;
        }
        remaining -= 1;
      }
      if (remaining > 0) {
        e = m - 1;
      } else {
        result = m;
        s = m + 1;
      }
    }
    return result; 
}

// non-binary search
function solution(a) {
    const peaks = [];
    let lastPeak = 0;
    let numPeaks = 0;
    for(let i = 1; i < a.length; i++) {
        if (a[i] > a[i-1] && a[i] > a[i+1]) {
            for(let j = lastPeak; j <= i; j++) {
                peaks.push(i);
                numPeaks += 1;
                lastPeak = i+1;
            }
            
        }
    }

    if (numPeaks <= 2) {
        return numPeaks;
    }

    let result = 0;
    let i = 1;
    while ((i-1) * i <= a.length) {
        let flag = 0;
        let count = 0;
        while (flag < a.length && count < i) {
            flag = peaks[flag]
            if (flag == undefined) {
                break;
            }
            flag += i;
            count += 1;
        }
        result = Math.max(count, result)
        i += 1
    }
    return result;
    
}
