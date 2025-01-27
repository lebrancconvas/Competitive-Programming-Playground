import { getInput } from "../../helper/input";

export function aoc_01_1() {

  const input = getInput('aoc_01');
  const sequence = input.trim().split('').map(data => parseInt(data));
  let matchDigit = [];

  for(let i = 0; i < sequence.length - 1; i++) {
    if(sequence[i] === sequence[i+1]) {
      matchDigit.push(sequence[i]);
    }
  }

  if(sequence[sequence.length - 1] === sequence[0]) {
    matchDigit.push(sequence[0]);
  }

  let result = matchDigit.reduce((x, y) => x + y);

  return result;

};

export function aoc_01_2() {
  const input = getInput('aoc_01');

  const sequence = input.trim().split('').map(digit => parseInt(digit));
  const frontSequence = sequence.slice(0, sequence.length / 2);
  const backSequence = sequence.slice(sequence.length / 2);

  let result = 0;

  for(let i = 0; i < frontSequence.length; i++) {
    if(frontSequence[i] === backSequence[i]) {
      result += frontSequence[i] + backSequence[i];
    }
  }
  return result;

};

console.log(aoc_01_1());
console.log(aoc_01_2());
