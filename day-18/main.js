function Unicorn(name, age) {
	'use strict';
	var agingSpeed = Math.ceil(Math.random() * 10);
	this.name = name;
	this.age = age;
	this.magical = (age >= 10);
	this.getOlder = function() {
		this.age = this.age + agingSpeed;
		return this;
	}
	console.log(this);
}

var unicorn = new Unicorn('Betty', 123);
var unicorn1 = new Unicorn('Joe Bob', 1);
var unicorn2 = new Unicorn('Jose', 54);

// Unicorn('James', 23);



function sayHi() {
	console.log('hi');
	console.log(this);
	return 'hi'
}

function callFun(fun) {
	fun();
}

document.querySelector('button').addEventListener('click', sayHi)

var myObj = {
	a: 'a',
	b: this // still the window
}

var myObj2 = {
	a: 'a',
	b: sayHi // the `this` inside here refers to the object.
}

var arr = [this, myObj, myObj2];
