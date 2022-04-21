const canConstruct = (target, wordBank) => {
    if (target === '') return true;
    for (let c of wordBank) {
        if (target.indexOf(c) === 0) {
            const suffix = target.slice(c.length);
            if (canConstruct(suffix, wordBank) === true) return true;
        }
    }
    return false;
}

// time complexity: O(n^m)
// space complexity: O(m^2)

console.log( canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) )


const canConstructMemoized = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;
    for (let c of wordBank) {
        if (target.indexOf(c) === 0) {
            const suffix = target.slice(c.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

// time complexity: O(n * m^2)
// space complexity: O(m^2)

console.log( canConstructMemoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) )
