import { getInput } from '../../helper/input';

export function aoc_05_1() {

  const input = getInput('aoc_05');

  const instructions = input.trim().split('\n').map(offset => parseInt(offset.trim()));
  let pointer = 0;
  let result = 0;

  while(pointer >= 0 && pointer < instructions.length) {
    const offset = instructions[pointer];
    instructions[pointer]++;
    pointer += offset;
    result++;
  }

  return result;
};

export function aoc_05_2() {

  const input = getInput('aoc_05');

  const instructions = input.trim().split('\n').map(instruction => parseInt(instruction.trim()));
  let pointer = 0;
  let result = 0;

  while(pointer >= 0 && pointer < instructions.length) {
    const offset = instructions[pointer];

    if(offset >= 3) {
      instructions[pointer]--;
    } else {
      instructions[pointer]++;
    }
    pointer += offset;
    result++;
  }

  return result;
  
};

console.log(aoc_05_1());

console.log(aoc_05_2());
