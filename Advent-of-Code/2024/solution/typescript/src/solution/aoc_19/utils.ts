export function inputManager(input: string) {
  const inputSection = input.split('\n');


  const availableTowels = inputSection[0].split(', ');
  const requestTowels = inputSection.splice(2);

  return { availableTowels, requestTowels };
};

export function canMakeTowel(requiredTowel: string, availableTowels: string[]): boolean {


  return false;

};
