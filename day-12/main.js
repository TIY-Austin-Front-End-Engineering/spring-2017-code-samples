// write and then run a function that takes an array and a function, and goes through each item in the array and runs the function on it.

function eachItem(array, func) {
	// go through each item in the array
	for (var i = 0; i < array.length; i++) {
		// run the function on that item
		func(array[i]);
	}
}

function sayHi() {
	console.log('hi');
}

function logItem(item) {
	console.log(item);
}

function logSquare(root) {
	console.log(root * root);
}

function makeADiv(divContents) {
	// this is string concatenation: adding a var and some strings together makes a longer string.
	var domStr = '<div>'+divContents+'</div>';
	// the += sign adds the new value to the existing value and assigns it
	document.querySelector('.container').innerHTML += domStr;
}

makeADiv('oh mylanta');

eachItem([1,2,3,4], sayHi);

eachItem([1,2,3,4], logItem);

eachItem([1,2,3,4], logSquare);

eachItem(['Jess', 'Matt', 'Bekah'], makeADiv)
