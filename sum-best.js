
// const fib = (n, memo = {}) => {
// 	if (n in memo) return memo[n];
// 	if (n <=2) return 1;
// 	memo[n] = fib(n-1, memo) + fib(n-2, memo)
// 	return memo[n]
// }

// console.log(fib(1))
// console.log(fib(5))
// console.log(fib(15))
// console.log(fib(50))


/**
 * NO MEMOIZATION
 * @param {*} n grid dimension
 * @param {*} m grid dimension
 * @returns number of ways to traverse the grid from top left to bottom right (moving only right and down)
 */
// const grid = (n, m) => {
// 	if (n == 0 || m == 0) return 0;
// 	if (n == 1 && m == 1) return 1;
// 	return grid(n-1, m) + grid(n, m-1);
// }

// time complexity = 2^(n+m) => O(2^n)
// space complexity = n+m => O(m+n)

// console.log(grid(1,1))
// console.log(grid(2,3))
// console.log(grid(3,3))
// console.log(grid(18,18))


// * WITH MEMOIZATION - DYNAMIC PROGRAMMING *//
// const grid = (m, n, memo={}) => {
// 	const key = `${m},${n}`;
// 	if (key in memo) return memo[key]
// 	if (n == 0 || m == 0) return 0;
// 	if (n == 1 && m == 1) return 1;
// 	memo[key] = grid(m-1, n, memo) + grid(m, n-1, memo);
// 	return memo[key];
// }

// time complexity = m x n => O(mn)
// space complexity = n+m => O(m+n)

// console.log(grid(1,1))
// console.log(grid(2,3))
// console.log(grid(3,3))
// console.log(grid(18,18))




/**
 * CanSum
 * func(target, nums, memo) => True|False
 */
// const canSum = (target, nums, memo={}) => {
	
// 	if (target in memo) return memo[target];
// 	if (target === 0) return true;
// 	if (target < 0) return false;

// 	for (let n of nums) {
// 		const remainder = target - n;
// 		if (canSum(remainder, nums, memo) === true) {
// 			memo[target] = true;
// 			return true;
// 		}
// 	}
// 	memo[target] = false;
// 	return false;
// };

// // test canSum:
// console.log(
// 	canSum(7, [2,3])
// );


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

// const howSum = (target, nums, memo={}) => {
// 	if (target in memo) return memo[target];
// 	if (target === 0) return [];
// 	if (target < 0) return null;

// 	for (let n of nums) {
// 		const remainder = target - n;
// 		const result = howSum(remainder, nums);
// 		if (result !== null) {
// 			memo[target] = [ ...result, n ];
// 			return [ ...result, n ];
// 		}
// 	} 
// 	memo[target] = null;
// 	return null;
// }



const bestSum = (target, nums) => {
	if (target === 0) return [];
	if (target < 0) return null;
	let shortestCombo = null;
	for (let num of nums) {
		const remainder = target - num;
		const remainderCombo = 	bestSum(remainder, nums);
		if (remainderCombo !== null) {
			const combo = [ ...remainderCombo, num ];
			shortestCombo = shortestCombo === null ? combo : shortestCombo;
			shortestCombo = shortestCombo.length < combo.length ? shortestCombo : combo;
		}
	}
	return shortestCombo;
};

console.log(bestSum(7, [5,3,4,7]));
console.log(bestSum(8, [2,3,5]));
console.log(bestSum(8, [1,4,5]));