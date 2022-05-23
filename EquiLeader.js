function solution(a) {
    const asc = {};
    const desc = {};
    let aMax = {c: 0};
    let dMax = {c: 0};
    const ascLeaders = [];
    const descLeaders = [];
    for (let i = 0, j = a.length - 1; i < a.length; i++, j--) {
        asc[a[i]] = (asc[a[i]] || 0) + 1;
        desc[a[j]] = (desc[a[j]] || 0) + 1;
        if (asc[a[i]] > aMax['c']) {
            aMax = {c: asc[a[i]], v: a[i]};
        }
        if (aMax['c'] > (i+1)/2) {
            ascLeaders[i] = aMax['v'];
        }
        if (desc[a[j]] > dMax['c']) {
            dMax = {c: desc[a[j]], v: a[j]};
        }
        if (dMax['c'] > (i+1)/2) {
            descLeaders[j] = dMax['v'];
        }
    }

    let leaders = 0;
    for (let i = 0; i < a.length; i++) {
        if (ascLeaders[i] != undefined && ascLeaders[i] == descLeaders[i+1]) {
            leaders += 1;
        }
    }

    return leaders;
}
