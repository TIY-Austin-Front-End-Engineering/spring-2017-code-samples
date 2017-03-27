export default function app() {
	// all your codes are belong to us
	console.log('tiy is awesome!')

  var bar = "wat";
	let foo = "hello world";

  // Let is not function scope but lexical scope
	for(let i = 0; i < 10; i++) {

	}
	console.log(i);

	// Constants (They don't change)
	const MAX_STUDENTS = 10;

	const logger = function (msg) {
		console.log(msg);
	}

  //Arrow Functions
	const greeter = (name) => {
    let msg = "Hello" + name + "You look great!"; // concat on two strings
    //Template string
    let msg = `Hello ${name}. You look great!`; // interpolating
		return msg;
	}
}
