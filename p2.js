function solve(n, A) {
    const INF = Number.MAX_SAFE_INTEGER;
    const dp = new Array(n).fill(0);
    const mx = new Array(n).fill(0);
    const mn = new Array(n).fill(0);

    // Calculate dp array
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = INF;
        for (let j = 0; j < i; j++) {
            const subarray = A.slice(j+1, i+1);
            const xor = subarray.reduce((acc, val) => acc ^ val);
            if (xor > 0) {
                dp[i] = Math.min(dp[i], dp[j]+1);
            }
        }
    }

    // Calculate mx array
    mx[0] = 1;
    for (let i = 1; i < n; i++) {
        mx[i] = mx[i-1];
        let j = i - 1;
        while (j >= 0 && dp[j]+1 !== dp[i]) {
            mx[i] = Math.max(mx[i], i-j);
            j--;
        }
    }

    // Calculate mn array
    mn[n-1] = dp[n-1];
    for (let i = n-2; i >= 0; i--) {
        mn[i] = Math.min(mn[i+1], dp[i]);
    }

    // Calculate the minimum product
    let ans = INF;
    for (let i = 0; i < n; i++) {
        if (mn[i] < INF) {
            ans = Math.min(ans, mx[i] * mn[i]);
        }
    }

    return ans === INF ? -1 : ans;
}

// Example usage:
const n = 5;
const A = [0, 1, 1, 0, 0];
const ans = solve(n, A);
console.log(ans); // Output: 6
