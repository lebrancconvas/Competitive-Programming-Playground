// Part 1
export function findMinAndMax(nums: number[]): [number, number] {
  let min = Infinity;
  let max = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < min) min = nums[i];
    if(nums[i] > max) max = nums[i];
  }

  return [min, max];
};

// Part 2

export function findDivider(nums: number[]): number {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
        if(nums[i] > nums[j]) return nums[i] / nums[j];
        else return nums[j] / nums[i];
      }
    }
  }

  return 0;

};
