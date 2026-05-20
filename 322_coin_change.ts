/**
 * Solution explanation: 
 * build up memo array, for each amount loop through
 * coins and calculate 1 coin + number of coins of 
 * memo array at that index 
 */

function coinChange(coins: number[], amount: number): number {
    const change: number[] = new Array(amount + 1).fill(-1);
    change[0] = 0;

    for (let i = 1; i < amount + 1; i++) {
        let minChange: number = Infinity;
        for (let c of coins) {
            if (c <= i) {
                const memo: number = change[i - c];

                if (memo !== -1) {
                    minChange = Math.min(minChange, memo + 1);
                }
            }
        }
        change[i] = (minChange === Infinity) ? -1 : minChange;
    }
    return change[amount];
};