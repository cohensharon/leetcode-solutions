/**
 * sliding window -- as long as profit isn't negative, keep sliding end date amd updating max value, 
 * if profit is negative that means end is lower so change that to the new buy value and build new window
 * */

function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;

    let buy = 0;
    let sell = 0;

    while (sell < prices.length) {
        // calculate current profit 
        const profit = prices[sell] - prices[buy];
        maxProfit = Math.max(profit, maxProfit);

        if (profit < 0) {
            buy = sell;
            sell = buy + 1;
        } else {
            sell++;
        }
    }

    return maxProfit;
};
