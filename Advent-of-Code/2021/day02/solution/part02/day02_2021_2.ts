import fs from 'fs';

// Read Input File. 
const input = fs.readFileSync('/Users/poomyimyuean/Desktop/Poomkun/Hub/Code/Competitive/Advent-of-Code/2021/day02/solution/input.txt', 'utf-8');

// Map Command to Key and Value to Value. 

let arrayOfCommand = input.split("\n");

let commandList: any[] = [];

let commandControl: any
let commandValue: any;

let horizontal = 0;
let depth = 0;

arrayOfCommand.map(x => {
	let commandSplit = x.split(" ");
	commandControl = commandSplit[0];
	commandValue = parseInt(commandSplit[1]);
	commandList.push({Command: commandControl, Value: commandValue});
})

commandList.map(x => {
	if(x.Command === "forward") {
		horizontal += x.Value;
	} else if(x.Command === "down") {
		depth += x.Value;
	} else if(x.Command === "up") {
		depth -= x.Value;
	}
})

console.log(horizontal * depth);     