function genRand(min, max, decimalPlaces) {  
	var rand = Math.random()*(max-min) + min;
	var power = Math.pow(10, decimalPlaces);
	return Math.floor(rand*power) / power;
}

for (var i=0; i<1; i++) {
	document.write(genRand(0.337187, 1.130426, 6));
}
