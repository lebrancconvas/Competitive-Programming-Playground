import fs from 'fs';
import path from 'path';

export function getInput(problemNo: string): string {
  try {
    const data = fs.readFileSync(path.join(__dirname, '..', '..', '..', '..', 'input', problemNo, 'input.txt'), 'utf8');

    return data;
  } catch(err) {
    console.error(err);
    throw new Error('[ERROR] Cannot get input.');
  }

};
