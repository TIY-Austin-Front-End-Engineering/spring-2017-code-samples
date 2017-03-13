// declare variables first
var button = document.querySelector('button');
var total = 8;

// declare functions next
function sayHi() {
	console.log('hi');
}

// declare event listeners third
button.addEventListener('click', function() {
	console.log('you clicked');
});

// finally runtime code
sayHi();

console.log(total);
console.log(total);
console.log(button);

//value vs reference;
// for primitive types we store a value in our variable
var num = 4;
var num2 = num;
num = 5;
console.log('num is ', num);
console.log('num2 is ', num2);
// what is num and num2?

// for non-primitive types we store a reference
var obj = {
	firstName: 'Jess',
	lastName: 'Scheuring'
}

var obj2 = obj;
console.log(obj2);
// if we reassign a single value of the object, both references change
obj.firstName = 'Jessica';
// if we reassign the whole object this doesn't happen
// obj = {
// 	firstName: 'jessica',
// 	lastName: 'Scheuring'
// }
console.log('obj is', obj);
console.log('obj2 is', obj2);

var arr = [0,1,2];
var arr2 = arr;
console.log(arr[0]); // 0
console.log(arr2[1]); // 1

arr2[0] = 56;
console.log(arr2[0]); //56
console.log(arr[0]); //56

arr2 = [64, 0, 99];
console.log(arr2[0]); //64
console.log(arr[0]); //56

whatsUp();

// function declaration:
function whatsUp() {
	console.log('what\'s up?');
}

// notMuch(); // this line will break our code if not commented out bc notMuch isn't assigned yet

// function expression
var notMuch = function() {
	console.log('not much');
}


function sayHi() {
	console.log('hi');
}

var varHi = sayHi();
console.log(sayHi); // logs out the whole function body
console.log(varHi); // logs out undefined

// pure fns vs side effects

var counter = 0;

function addToCounter() {
	counter++;
}

addToCounter();

function pureIncremetor(num) {
	return num + 1;
}

pureIncremetor(counter);

var pure = document.getElementById('pure');
var impure = document.getElementById('impure');

function impureAddition(a, b) {
	impure.innerText = a + b;
}

impureAddition(3, 4);

function pureAddition(a, b) {
	return a + b;
}

pure.innerText = pureAddition(3,4);
console.log(pureAddition(5,89));


button.addEventListener('click', function(evt) {
	console.log(evt); // we're just checking to see what the argument is here
	console.log(evt.target.innerText); // get the text out of the elemnt we clicked on
	console.log(evt.type) // get the type of event, in this case click
})
//
