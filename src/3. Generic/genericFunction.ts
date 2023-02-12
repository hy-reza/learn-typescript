function wrapInArray<T>(...num: T[]) {
  return [...num];
}

const nums = wrapInArray<number>(1, 2, 3, 4, 5, 6);

const letters = wrapInArray<string>("a", "b", "c", "d");

console.info({ nums, letters });

//Output:
// letters : (4) ['a', 'b', 'c', 'd']
// nums: (6) [1, 2, 3, 4, 5, 6]
