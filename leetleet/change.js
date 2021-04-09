function change(amount, coins) {
  // let counter = 0;
  let combinations = [];
    for (let i = 0; i < coins.length; i++ ) {
      let coin = coins[i];
      let combination = [];
      console.log(amount % coin === 0)
      if ( amount % coin === 0 ) {
        // counter += 1;
        combination.push(coin);
        let difference = amount - coin;
        change(difference, coins);
      }

    }

    return combinations.length;
};