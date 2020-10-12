// closure
function createCounter(){
	let currentValue = 0;
	return function(){
		return currentValue++;
	}
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log("__________________");
console.log(counter2());
console.log(counter2());
console.log("__________________");

// closure return object

function createCounterWithObject(){
	let currentValue = 1;
	
	return {
		getNext: function(){
			return currentValue++;
		},
		setValue: function(value){
			currentValue = value;
		},
		reset: function(){
			currentValue = 1;
		}
	}
}

let objectCounter = createCounterWithObject();
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
objectCounter.setValue(-10);
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
objectCounter.reset();
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log(objectCounter.getNext());
console.log("__________________________");

// closure return function
function createCounterWithFunction(){
	let currentValue = 1;
	
	function creator(){
		return currentValue++;
	}
	
	creator.setValue = function(value){
		currentValue = value;
	}
	
	creator.reset = function(){
		currentValue = 1;
	}
	return creator;
}

let objectCounter2 = createCounterWithFunction();

console.log(objectCounter2());
console.log(objectCounter2());
console.log(objectCounter2());
console.log(objectCounter2());
objectCounter2.setValue(-10);
console.log(objectCounter2());
console.log(objectCounter2());
console.log(objectCounter2());
objectCounter2.reset();
console.log(objectCounter2());
console.log(objectCounter2());
console.log(objectCounter2());