import { getInput } from "../../helper/input";
import { blink } from "./utils";

export function aoc_11_1() {
  const input = getInput('aoc_11');
  let result = input;

  for(let i = 1; i <= 25; i++) {
    result = blink(result);
  }

  return result.split(' ').length;
};

export function aoc_11_2() {

};

console.log(aoc_11_1());
