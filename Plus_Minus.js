function plusMinus(arr) {
  let pos_num = 0;
  let neg_num = 0;
  let zero_num = 0;
  let arr_count = arr.length;

  arr.map((num, key) => {
    if (num > 0) {
      pos_num++;
    } else if (num < 0) {
      neg_num++;
    } else {
      zero_num++;
    }

    return num;
  });

  let positive = pos_num / arr_count;
  let negative = neg_num / arr_count;
  let zero = zero_num / arr_count;

  console.log(positive);
  console.log(negative);
  console.log(zero);
}

plusMinus([1, 1, 0, -1, -1]);
