function diagonalDifference(arr) {
  let ds1 = 0;
  let ds2 = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        ds1 += arr[i][j];
      }

      if (i + j === n - 1) {
        ds2 += arr[i][j];
      }
    }
  }

  let ans = Math.abs(ds2 - ds1);

  console.log(ans);

  return ans;
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
