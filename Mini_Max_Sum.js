function miniMaxSum(arr) {

  let sum = arr.reduce((a, b) => {
    return a + b;
  });

  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);

  console.log(min + " " + max);

}

miniMaxSum([1,2,3,4,5])