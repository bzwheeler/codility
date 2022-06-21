function solution(a) {
    const n = a.length;
    const seen = [];
    for(let i = 0; i < n; i++) {
        if (a[i] == 0 || a[i] > n || seen[a[i]]) {
            return 0;
        }
        seen[a[i]] = 1;
    }
    return 1;
}
