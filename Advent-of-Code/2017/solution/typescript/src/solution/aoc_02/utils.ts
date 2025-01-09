export function findMinAndMax(nums: number[]): [number, number] {
  let min = Infinity;
  let max = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < min) min = nums[i];
    if(nums[i] > max) max = nums[i];
  }

  return [min, max];

};
