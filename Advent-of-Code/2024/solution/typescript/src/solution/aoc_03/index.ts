import { matchesGlob } from "path";
import { getInput } from "../../helper/input";

export function aoc_03_1(): number {
  const input = getInput('aoc_03');
  const pattern = /mul\((\d+),(\d+)\)/g;
  const operations = [...input.matchAll(pattern)];
  let sum = 0;

  operations.forEach(operation => {
    const [fullOperation, num1, num2] = operation;
    const resultOfOperation = parseInt(num1) * parseInt(num2);
    sum += resultOfOperation;
  });

  return sum;
};

export function aoc_03_2() {
  const input = getInput('aoc_03');

  const parts = input.split(/(don't\(\)|do\(\))/);

  let shouldProcess = true;

  const pattern = /mul\((\d+),(\d+)\)/g;


  let sum = 0;
  parts.forEach((part, index) => {
    if(part === "don't()") {
      shouldProcess = false;
    } else if(part === "do()") {
      shouldProcess = true;
    } else {
      if(shouldProcess) {
        const operations = [...part.matchAll(pattern)];
        operations.forEach(operation => {
          const [_, num1, num2] = operation;

          sum += parseInt(num1) * parseInt(num2);
        })
      }
    }
  });

  return sum;
};


console.log(aoc_03_1());
console.log(aoc_03_2());
