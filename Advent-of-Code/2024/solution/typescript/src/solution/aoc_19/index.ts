import { getInput } from "../../helper/input";
import { inputManager } from "./utils";

export function aoc_19_1() {

  const input = getInput('aoc_19');

  const { availableTowels, requestTowels } = inputManager(input);

  return requestTowels;

};

export function aoc_19_2() {

  const input = getInput('aoc_19');

  const { availableTowels, requestTowels } = inputManager(input);
};

console.log(aoc_19_1());
// console.log(aoc_19_2());
