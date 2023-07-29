function miniMaxSum(arr) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (arr[i] < min) {
        min = arr[i];
      }
  
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    const minSum = sum - max;
    const maxSum = sum - min;
    console.log(minSum + " " + maxSum);
  }
  
  miniMaxSum([1, 3, 5, 7, 9]);
  
