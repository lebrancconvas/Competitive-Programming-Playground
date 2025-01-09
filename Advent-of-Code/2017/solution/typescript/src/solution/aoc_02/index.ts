import { getInput } from "../../helper/input";
import { findMinAndMax } from "./utils";

export function aoc_02_1() {
  const input = getInput('aoc_02').trim();

  const rows = input.split('\n');
  const table = rows.map(row => row.trim().split('\t').map(data => parseInt(data.trim())));

  let result = 0;

  for(let i = 0; i < rows.length; i++) {
    const [minOfRow, maxOfRow] = findMinAndMax(table[i]);

    result += (maxOfRow - minOfRow);
  }
  return result;
};

export function aoc_02_2() {

}


console.log(aoc_02_1());
