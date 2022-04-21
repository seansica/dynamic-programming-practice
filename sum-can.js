/**
 * CanSum
 * func(target, nums, memo) => True|False
 */
const canSum = (target, nums, memo={}) => {
	
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;

	for (let n of nums) {
		const remainder = target - n;
		if (canSum(remainder, nums, memo) === true) {
			memo[target] = true;
			return true;
		}
	}
	memo[target] = false;
	return false;
};

// // test canSum:
console.log(
	canSum(7, [2,3])
);