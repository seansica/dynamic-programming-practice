/**
 * HOW SUM
 * return an array containing any combo of elems that add up to the target sum
 * if no combos => return null
 * if multiple combos => return any single one
 * 
 * e.g., howSum(7, [5,3,4,7]) => [3,4] or [7]
 * 		 howSum(8, [2,3,5]) => [3,5] or [2,2,2,2]
 * 		 howSum(7, [2,4]) => null
 * 		 howSum(0, [1,2,3]) => []  // 0 returns empty array
 */

const howSum = (target, nums, memo={}) => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	for (let n of nums) {
		const remainder = target - n;
		const result = howSum(remainder, nums);
		if (result !== null) {
			memo[target] = [ ...result, n ];
			return [ ...result, n ];
		}
	} 
	memo[target] = null;
	return null;
}