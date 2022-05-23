function solution(n) {
    const end = Math.sqrt(n);
    const endInt = Math.floor(end);
    if (endInt == end) {
        return 4 * end;
    }
    for(let i = endInt; i > 0; i--) {
        if (n % i == 0) {
            return 2 * (i + (n/i));
        }
    }
    return 0;
}
