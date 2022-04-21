/**
 * Write a function fn(target, workBank) that accepts a target string and an array of strings
 * Return the number of ways the target word can be constructed by concatenating elements of the word bank
 */

const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target.length === 0) return 1;

    let totalCount = 0;

    for (let c of wordBank) {
        // if the cur word is a prefix of target
        if (target.indexOf(c) === 0) {
            const numWaysForRest = countConstruct(target.slice(c.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
}