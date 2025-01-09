export enum SafeStatus {
  Safe = 'Safe',
  Unsafe = 'Unsafe'
};

export function safeFilter(arr: number[]): SafeStatus {
  let levelRate = [];
  for(let i = 0; i < arr.length - 1; i++) {
    levelRate.push(arr[i] - arr[i + 1]);
  }

  // Check 01: Level change must not be equal (mean Level Rate must not have 0 in their array).
  let levelRateHasZero = levelRate.includes(0);
  if(levelRateHasZero) return SafeStatus.Unsafe;

  // Check 02: Level Change must not both increase and decrase in one line.
  const isRateTrendAllIncrease = levelRate.filter(rate => rate > 0).length === 0;
  const isRateTrendAllDecrease = levelRate.filter(rate => rate < 0).length === 0;
  if(!isRateTrendAllIncrease && !isRateTrendAllDecrease) return SafeStatus.Unsafe;

  // Check 03: Level Change must not less than 1 and more than 3 and must be integer.
  const isRateRangeValid = levelRate.map(rate => Math.abs(rate)).filter(rate => rate > 3).length === 0;
  if(!isRateRangeValid) return SafeStatus.Unsafe;

  return SafeStatus.Safe;
};
