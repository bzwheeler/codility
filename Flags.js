// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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
