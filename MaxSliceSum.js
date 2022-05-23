function solution(a) {
    let max = Number.NEGATIVE_INFINITY;
    let current = 0;
    for(let i = 0; i < a.length; i++) {
        current = Math.max(current + a[i], a[i]);
        if (current > max) {
            max = current;
        }
    }
    return max;
}
