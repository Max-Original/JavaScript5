// modules.
let a  = 10;

(function(){
	let a = 12;
	function showA(){
		console.log(a);
	}
	showA();
})();

console.log(a);

console.log("____________________");

let t = (function(){
	let a = 17;
	return{
		showMessage: function(){
			console.log(a);
		}
	}
})();
t.showMessage();