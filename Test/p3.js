// function minimumArray(n, m, A) {
//   A.sort((a, b) => a - b);
//   let maxDiff = 0;
//   for (let i = 1; i < n; i++) {
//     maxDiff = Math.max(maxDiff, (A[i] - A[i - 1] + m) % m);
//   }
//   return maxDiff + 1;
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumArray(n, m, A));




//console.log(minimumArray(7,7,[0,13,8,3,9,4,7]))



// function minimumArray(n, m, A) {
//   let maxL = 0;
//   for (let i = 0; i < n - 1; i++) {
//     maxL = Math.max(maxL, (A[i + 1] - A[i] + m) % m - 1);
//   }
//   return maxL;
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumArray(n, m, A));




// function minimumArray(n, m, A) {
//   let maxDiff = 0;
//   for (let i = 1; i < n; i++) {
//     maxDiff = Math.max(maxDiff, (A[i] - A[i - 1] + m) % m - 1);
//   }
//   return maxDiff;
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumArray(n, m, A));




// function minimumArray(n, m, A) {
//   let maxDiff = 0;
//   for (let i = 1; i < n; i++) {
//     maxDiff = Math.max(maxDiff, (A[i] - A[i - 1] + m) % m - 1);
//   }
//   return maxDiff;
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumArray(n, m, A));






// function minimumArray(n, m, A) {
//   let maxDiff = 0;
//   let B = Array(n).fill(0);
//   for (let i = 1; i < n; i++) {
//     let diff = (A[i] - A[i - 1] + m) % m;
//     if (diff > maxDiff) {
//       maxDiff = diff - 1;
//       B[i] = maxDiff;
//     } else {
//       B[i] = 0;
//     }
//   }
//   return {L: maxDiff, B: B};
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// let result = minimumArray(n, m, A);
// console.log("L: ", result.L);
// console.log("B: ", result.B);





// function minimumArray(n, m, A) {
//   let maxDiff = 0;
//   let B = Array(n).fill(0);
//   for (let i = 1; i < n; i++) {
//     let diff = (A[i] - A[i - 1] + m) % m;
//     if (diff > maxDiff) {
//       maxDiff = diff - 1;
//       B[i] = maxDiff;
//     } else {
//       B[i] = 0;
//     }
//   }
//   let L = Math.max(...B);
//   return L;
// }

// let n = 5, m = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumArray(n, m, A));




// function minimumPossibleValue(N, M, A) {
//   A.sort((a, b) => a - b);
//   let L = 0;
//   for (let i = 1; i < N; i++) {
//     let diff = (A[i] - A[i - 1] + M) % M;
//     L = Math.max(L, diff);
//   }
//   return L;
// }


// let N = 5, M = 7;
// let A = [0, 13, 8, 3, 9];
// console.log(minimumPossibleValue(N, M, A));  // Output: 1





// function minL(n, m, a) {
//   a.sort((x, y) => x - y);
//   let b = Array(n).fill(0);
//   let L = 0;
//   for (let i = 1; i < n; i++) {
//       let diff = (a[i] - a[i - 1] + m) % m;
//       b[i] = Math.max(0, b[i - 1] + 1 - diff);
//       L = Math.max(L, b[i]);
//   }
//   return [L, b];
// }

// let n = 5, m = 7, a = [0, 13, 8, 3, 9];
// let [L, b] = minL(n, m, a);
// console.log("L:", L);
// console.log("B:", b);






function minValue(n, m, A) {
  let B = [];
  for (let i = 0; i < n; i++) {
    B[i] = (A[(i + 1) % n] - A[i] + m) % m;
  }
console.log(B);
  let maxB = Math.max(...B);
  return maxB;
}

const n = 5;
const m = 7;
const A = [0, 13, 8, 3, 9];
console.log(minValue(n, m, A));
