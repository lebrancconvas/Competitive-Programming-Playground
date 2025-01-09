export function blink(stoneSet: string): string {
  let stoneArray = stoneSet.split(' ');
  let processedStoneArray: string[] = [];

  stoneArray.forEach((stone: string) => {
    let processStone = process(stone);
    if(typeof processStone === 'string') {
      processedStoneArray.push(processStone);
    } else {
      processedStoneArray.push(processStone[0]);
      processedStoneArray.push(processStone[1]);
    }
  })

  let newStoneSet = processedStoneArray.join(' ');
  return newStoneSet;
};

function process(stone: string): string | [string, string] {
  if(stone === '0') return '1';

  if(isStoneDigitEven(stone)) {
    let newStoneLeftSide = stone.slice(0, stone.length / 2);
    let newStoneRightSide = stone.slice(stone.length / 2);
    return [newStoneLeftSide, newStoneRightSide];
  }

  return (parseInt(stone) * 2024).toString();
};

function stoneDigit(stone: string): number {
  let stoneNumber = parseInt(stone);
  let digit = 0;
  while(stoneNumber !== 0) {
    stoneNumber = Math.floor(stoneNumber / 10);
    digit++;
  }

  return 0;
};

function isStoneDigitEven(stone: string): boolean {
  return stoneDigit(stone) % 2 === 0;
};
