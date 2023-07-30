function birthdayCakeCandles(candles) {
    let candal_count = 0
    let max_candles = Math.max(...candles)
    
    for (let i = 0; i < candles.length; i++){
        if(candles[i] == max_candles){
            candal_count = candal_count + 1;
        }
    }
      
      console.log(candal_count);
      return candal_count;
  }
  
  birthdayCakeCandles([3, 2, 1, 3]);
  
  