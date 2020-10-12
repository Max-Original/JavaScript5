function makeBuffer(){
	let arr = [];
	
	return {
		add: function(value){
			let value2 = value.toString();
			arr.push(value2);
		},
		print: function(){
			return arr;
		},
		clear: function(){
				arr.length = 0 ;
		}
	}
}

let buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("says");
buffer.add("hello");
buffer.add(0);
buffer.clear();
console.log(buffer.print());