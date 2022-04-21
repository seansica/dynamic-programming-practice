/**
 * NO MEMOIZATION
 * @param {*} n grid dimension
 * @param {*} m grid dimension
 * @returns number of ways to traverse the grid from top left to bottom right (moving only right and down)
 */
const grid = (n, m) => {
	if (n == 0 || m == 0) return 0;
	if (n == 1 && m == 1) return 1;
	return grid(n-1, m) + grid(n, m-1);
}

// time complexity = 2^(n+m) => O(2^n)
// space complexity = n+m => O(m+n)

console.log(grid(1,1))
console.log(grid(2,3))
console.log(grid(3,3))
console.log(grid(18,18))



// * WITH MEMOIZATION - DYNAMIC PROGRAMMING *//
const grid_memo = (m, n, memo={}) => {
	const key = `${m},${n}`;
	if (key in memo) return memo[key]
	if (n == 0 || m == 0) return 0;
	if (n == 1 && m == 1) return 1;
	memo[key] = grid(m-1, n, memo) + grid(m, n-1, memo);
	return memo[key];
}

// time complexity = m x n => O(mn)
// space complexity = n+m => O(m+n)

console.log(grid(1,1))
console.log(grid(2,3))
console.log(grid(3,3))
console.log(grid(18,18))