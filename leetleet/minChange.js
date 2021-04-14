function minChange(coins, amount, memo = {}) {
    // using % makes sense
    let counter = 0;
    // let counterArr = [];
    // let largest = coins.pop();

    
    for (let i = coins.length - 1; i >= 0; i--) {
        let coinValue = coins[i];
        
        if (coinValue <= amount) { // ([1, 4, 5], 8)
            let remainder = amount % coinValue;
            let coinsAmount = Math.floor(amount / coinValue);
            counter += coinsAmount;
            if (remainder > 0) {
                counter += minChange(coins, remainder, memo);
            }

            break;
        }
    }

    return counter;
}