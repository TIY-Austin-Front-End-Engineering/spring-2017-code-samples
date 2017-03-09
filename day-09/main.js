// console.log('hi');
//
// var button = document.querySelector('#calc');
//
// console.dir(button);
//
// function action() {
// 	console.log('1 + 4', 'let\'s do math!')
// }
//
// button.onclick = action;

var input = document.querySelector('input'); // selects the first matching element in the document.

console.log(input);

var input2 = document.querySelector('.num'); // selects only the first matching element in the document

console.log(input2);

var input3 = document.querySelector('#value1'); // select the first matching element from the document.

console.log(input3);

var inputs = document.querySelectorAll('input'); // selects all 3 inputs from the DOM

console.dir(inputs[2]); // show us only the 3rd matching element in the console

var numbers = document.querySelectorAll('.num');

console.log(numbers); // logs the whole list of matched elements
console.log(numbers[0]); // logs only the first matched element

var output = document.getElementById('result'); // notice i don't need a # for this

console.log(output);

var numbers2 = document.getElementsByClassName('num') // matches all elements with the class num and puts them in an array like object

console.log(numbers2);

//old syntax
// inputs[2].onclick = function click() {
// 	console.log('you clicked the button');
// }
//
// inputs[2].onclick = function reClick() {
// 	console.log('please click the button again');
// }

//new syntax
inputs[2].addEventListener('click', function click() {
	console.log('you clicked the button');
})

inputs[2].addEventListener('click', function reClick() {
console.log('please click the button again');
})

function add2Numbers(num1, num2) {
	console.log(num1);
	console.log(num2);
	console.log(num1 + num2);
}

add2Numbers(1, 2);
add2Numbers(4, 3);
add2Numbers(2, 3, 3, 3);
add2Numbers('hi', [1,3,4])

var teacher = 'Jess';

// if (teacher == 'Jess') {
// 	console.log('that\'s my teach!');
// } else if (teacher === 'Matt') {
// 	console.log('that\'s my ta!')
// } else {
// 	console.log('that\'s not my teach!');
// }

function testTeacher(teacherName) {
	if (teacherName == 'Jess') {
		console.log('that\'s my teach!');
	} else if (teacherName === 'Matt') {
		console.log('that\'s my ta!')
	} else {
		console.log('that\'s not my teach!');
	}
}

testTeacher('Neal');

// test the name inputted into the field
// get the name from the input field
	// get the input field
	var teacherInput = document.querySelector('#teacher-name');

	// get it's text
		// var teacherName = teacherInput.value;
		// console.log(teacherName);
		// (it's too soon to do this name grabbing, we haven't let the user tell us the name yet)

// listen for a click on the test teacher button
	// get the button

	var testButton = document.querySelector('#test-teacher-btn');
	testButton.addEventListener('click', function() {
		testTeacher(teacherInput.value);
	})
	// write an event listener


















//
