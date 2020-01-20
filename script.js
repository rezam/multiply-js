let btnResult = document.getElementById("btn");
let txtResult = document.getElementById("result");
let numberOne = document.getElementsByClassName("number-one")[0];
let numberTwo = document.getElementsByClassName("number-two")[0];

function mutiplyNums (numberOne, numberTwo) {
	let result = numberOne * numberTwo;
	return result;
}
	
btnResult.onclick = function() {
	let result = mutiplyNums(numberOne.value, numberTwo.value);
	txtResult.innerHTML = result;
};
