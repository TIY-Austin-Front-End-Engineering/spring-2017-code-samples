var unicorns = [
	{
		name: 'Sally',
		powers: [
			'invisibility',
			'healing'
		],
		last: false,
		age: 5970,
		color: {
			hair: 'glitter',
			body: 'white',
			eyes: 'transluscent'
		}
	},
	{
		name: 'Joe-bob',
		powers: [
			'flying',
			'beer drinking'
		],
		last: true,
		age: 590,
		color: {
			hair: 'brown',
			body: 'dirt',
			eyes: 'bloodshot'
		}
	},
	{
		name: 'Amalthea',
		powers: [
			'magic',
			'healing'
		],
		last: true,
		age: 'as the sun',
		color: {
			hair: 'white',
			body: 'white',
			eyes: 'blue'
		}
	},
	{
		name: 'Max',
		powers: [],
		last: false,
		age: 1,
		color: {
			hair: 'white',
			body: 'white',
			eyes: 'brown'
		}
	},
];

console.log(unicorns);

// use map to simplify the array like this:
// unicorn = [
// 	{name: '', bodyColor: ''}
// ]

var simplifiedUnicorns = unicorns.map(function(unicorn, index, array) {
	return {
		name: unicorn.name,
		bodyColor: unicorn.color.body
	};
});

console.log(simplifiedUnicorns);

// figure out how many unicorns have a white body
var whiteBodyCount = unicorns.filter(function(unicorn, i, arr) {
	return unicorn.color.body === 'white';
}).length

console.log(whiteBodyCount);

// figure out just the names of the unicorns who have healing power
// first lets filter by healing powers
// then map for just their names
var healingUnicorns = unicorns.filter(function(unicorn, i,arr) {
	return unicorn.powers.includes('healing');
});
var healingNames = healingUnicorns.map(function(unicorn, i, arr) {
	return unicorn.name;
});
healingNames.forEach(function(name, i, arr) {
	console.log(name);
})

// find all unicorns names and ages and add them to the list in the dom
// "<name> is <age> years old"
function makeLis() {
	var outputArea = document.querySelector('#unicorns');
	var sentences = unicorns.map(function(unicorn, i, arr){
		return unicorn.name + ' is ' + unicorn.age + ' old';
	});
	sentences.forEach(function(sentence, i, arr) {
		outputArea.innerHTML += '<li>'+sentence+'</li>'
	});
}

makeLis();


///REDUCE

var arr = [1,2,3,4,5];
var total = arr.reduce(function(returnedSoFar, currentItem, index, array) {
	console.log(returnedSoFar, currentItem);
	return returnedSoFar + currentItem;
}, 0);

console.log(total);

var average = arr.reduce(function(building, current, i, arr) {
	return building + current;
})/arr.length;

console.log(average);

var word = 'unicorn';

// 'unonicocorornon'

// with reduce i'm working towards my end result incrementally over time
// i should return as complete an example as i have at each iteration
var answer = word.split('').reduce(function(building, letter, i, arr) {
	if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
		return building + letter;
	} else {
		return building + letter + '0' + letter;
	}
}, '');

console.log(answer);

var nums = [45, 2346, 29, 9, 4938, -384];
// find the largest number in a series of numbers

var largestNum = nums.reduce(function(larger, current, i, arr) {
	console.log(larger, current);
	if (larger > current) {
		return larger;
	} else {
		return current;
	}
})

console.log(largestNum);

// add the word 'hi' to the container div

// get our ingredients first
var element = document.querySelector('.container');
var word = 'hi';

element.innerText = word;

// overwrite the container and add an ul and li with hi in it
var domString = '<ul><li>hi</li></ul>'

element.innerHTML = domString;

// empty the container element
element.innerHTML = '';

// make an image tag and put it in the DOM
var url = 'http://fillmurray.com/200/200';
var tag = '<img src="' + url + '"/>';
element.innerHTML = tag;














//
