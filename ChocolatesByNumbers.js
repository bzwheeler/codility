function solution(n, m) {
    // write your code in JavaScript (Node.js 8.9.4)
    const seen = [];
    let i = 0;
    let ate = 0;
    while(!seen[i]) {
        seen[i] = true;
        const canEat = 1 + Math.floor((n - i - 1)/m);
        ate += canEat;
        i = (i + canEat * m) % n;
    }
    return ate;
}
