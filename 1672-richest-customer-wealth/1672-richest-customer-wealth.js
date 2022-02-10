/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0, cur = 0
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            cur += accounts[i][j]
        }
        if (cur > max) max = cur
        cur = 0
    }
    return max
};