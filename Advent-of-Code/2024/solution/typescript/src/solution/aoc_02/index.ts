import { getInput } from "../../helper/input";
import { safeFilter } from "./utils";

export function aoc_02_1(): number {
  const input = getInput('aoc_02');
  const data = input.split('\n').map(line => line.split(' ').map(el => parseInt(el)));
  const isDataSafe = data.map(el => safeFilter(el));
  const result = isDataSafe.filter(status => status === 'Safe').length;

  return result;
};


console.log(aoc_02_1());
