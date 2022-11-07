function hammingWeight(n: number): number {
	let binN = decToBin(n);
	let binNString = binN.split("");
	let num1Bits = binNString.filter(x => x === "1").length; 
	return num1Bits;  
};

function decToBin(dec: number): string {
let binBit = [];
let bin = "";

while(dec != 0) {
	binBit.push(dec % 2);
	dec = Math.floor(dec / 2);
}

binBit = binBit.reverse().map(x => x.toString());

for(let i = 0; i < binBit.length ; i++) {
	bin += binBit[i];
}

return bin; 
}