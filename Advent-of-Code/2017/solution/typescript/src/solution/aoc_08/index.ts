import { register } from "module";
import { getInput } from "../../helper/input";

export function aoc_08_1() {
  const input = getInput('aoc_08');

  const registers = new Map<string, number>();

  const rows = input.trim().split('\n').map(instruction => instruction.trim().split(' ').filter(x => x !== 'if'));

  for(let i = 0; i < rows.length; i++) {
    const [mainVar, operator, rawOperand, compVar, comparator, rawComparand] = rows[i];

    const operand = parseInt(rawOperand);
    const comperand = parseInt(rawComparand);

    if(!registers.has(mainVar)) {
      registers.set(mainVar, 0);
    }
    if(!registers.has(compVar)) {
      registers.set(compVar, 0);
    }

    const compVarValue = registers.get(compVar);

    let mainVarValue = registers.get(mainVar);

    if(typeof compVarValue === 'number' && typeof mainVarValue === 'number') {
      switch(comparator) {
      case '>':
        if(compVarValue > comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '<':
        if(compVarValue < comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '>=':
        if(compVarValue >= comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '<=':
        if(compVarValue <= comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '==':
        if(compVarValue == comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '!=':
        if(compVarValue != comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      }
    }

  }

  let registerValues = [...registers.values()];

  let result = Math.max(...registerValues);

  return result;
};

export function aoc_08_2() {
  const input = getInput('aoc_08');

  const registers = new Map<string, number>();

  const rows = input.trim().split('\n').map(instruction => instruction.trim().split(' ').filter(x => x !== 'if'));

  let result = 0;

  for(let i = 0; i < rows.length; i++) {
    const [mainVar, operator, rawOperand, compVar, comparator, rawComparand] = rows[i];

    const operand = parseInt(rawOperand);
    const comperand = parseInt(rawComparand);

    if(!registers.has(mainVar)) {
      registers.set(mainVar, 0);
    }
    if(!registers.has(compVar)) {
      registers.set(compVar, 0);
    }

    const compVarValue = registers.get(compVar);

    let mainVarValue = registers.get(mainVar);

    if(typeof compVarValue === 'number' && typeof mainVarValue === 'number') {
      switch(comparator) {
      case '>':
        if(compVarValue > comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '<':
        if(compVarValue < comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '>=':
        if(compVarValue >= comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '<=':
        if(compVarValue <= comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '==':
        if(compVarValue == comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      case '!=':
        if(compVarValue != comperand) {
          if(operator === 'inc') {
            mainVarValue += operand;
            registers.set(mainVar, mainVarValue);
          } else if(operator === 'dec') {
            mainVarValue -= operand;
            registers.set(mainVar, mainVarValue);
          }
        }
        break;
      }
    }

    let valueInTurn = [...registers.values()];
    let maxValueInTurn = Math.max(...valueInTurn);

    if(maxValueInTurn > result) result = maxValueInTurn;
  }


  return result;

};


console.log(aoc_08_1());

console.log(aoc_08_2());
