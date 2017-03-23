var str = 'Prototypes are cool';

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

	// this.heal = function (){
	// 	console.log('you got healed by a unicorn');
	// } // we put this on the prototype instead
	console.log(this);
}

Unicorn.prototype.heal = function (who){
	return who + ' got healed by ' + this.name;
}

var unicorn1 = new Unicorn('Amalthea', 34);
var unicorn2 = new Unicorn('Brent', 6);

unicorn1.heal('Jess'); // 'Jess was healed by Amalthea'

String.prototype.shout = function(){
	return this.toUpperCase() + '!!!!!';
}


'hello'.shout(); ///HELLO!!!!!
'Jess'.shout(); ///JESS!!!!!
'javascript is fun'.shout(); ///JAVASCRIPT IS FUN!!!!!
'what\'s up?'.shout(); ///WHAT\'S UP?!!!!!

unicorn1.heal().shout()

// Increment by a number method available to all numbers

Number.prototype.incBy = function(num) {
	return this + num;
}

var num1 = 5;

var num2 = num1.incBy(87);

console.log(num2);
console.log(num1);

function ToDo(taskName) {
	'use strict';
	this.taskName = taskName;
	this.completed = false;
}

ToDo.prototype.toggleComplete = function() {
	this.completed = !this.completed;

	// this code below accomplishes the same as the line above.
	// if (this.completed === false) {
	// 	this.completed = true;
	// } else {
	// 	this.completed = false;
	// }

	return this.completed;
}

function renderCompleteButton(todoItem) {
	console.log(todoItem);
	var text = '';
	if (todoItem.completed) {
		text = 'finished';
	} else {
		text = 'mark complete';
	}
	var $button = $('<button>'+text+'</button>');
	$button.on('click', function() {
		todoItem.toggleComplete();
		renderTodo(todoItem);
	})
	return $button;
}

function renderTodo(todoItem) {
	var $el = $('<li>'+todoItem.taskName+'</li>');
	var $button = renderCompleteButton(todoItem);
	$el.addClass('todo-item');
	$el.append($button);
	$('.todo-list').html($el);
	return $el;
}

var todo1 = new ToDo('change banks');
var todo2 = new ToDo('do laundry');

todo2.toggleComplete();

console.log(todo1);
console.log(todo2);

renderTodo(todo1);
