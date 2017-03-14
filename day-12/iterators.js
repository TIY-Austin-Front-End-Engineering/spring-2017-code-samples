var people = [
	{age: 33,firstName: 'Jess'},
	{age: 30,firstName: 'Sam'},
	{age: 24,firstName: 'Matt'},
	{age: 28,firstName: 'Karly'},
	{age: 29,firstName: 'Quincy'}];

// people.forEach(function sayHi(item, index, array) {
// 	console.log('hi ' + item);
// 	console.log(array);
// 	console.log(array);
// });

var testing = people.forEach(function(item, index, array) {
	var ul = document.querySelector('#names');
	var listItem = '<li>' + item.firstName + ' is ' + item.age + '</li>'
	ul.innerHTML += listItem;
});

console.log(testing); // this is undefined bc forEach has no return value

var names = people.map(function(item, index, array) {
	return item.firstName;
})

var ages = people.map(function(item, index, array) {
	return '<li>' + item.age + '</li>';
})

ages.forEach(function(item, index, array) {
	var ul = document.querySelector('#names');
	ul.innerHTML += item;
})

var oldPeople = people.filter(function(item, index, array) {
	return item.age >= 30;
});

console.log(oldPeople);

console.log(ages);
