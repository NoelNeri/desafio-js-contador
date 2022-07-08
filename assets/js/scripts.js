
var currentNumber = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");

let addCounter = document.querySelector("#adicionar");

let subCounter = document.querySelector("#subtrair");

addCounter.addEventListener("click", function() {
	if (currentNumber < 3) {
		currentNumber = currentNumber + 1;
		this.disabled = false ; 
		this.style.color = "lightcoral";}
	else {
		this.disabled = true;
		this.style.color = "white" ;}
	
	if (currentNumber > -1) {
		CURRENT_NUMBER.style.color = "black" ;}

	CURRENT_NUMBER.innerHTML = currentNumber;
}
)

subCounter.addEventListener("click", function() {
	if (currentNumber > -3) {
		currentNumber = currentNumber - 1;
		this.disabled = false ;
		this.style.color = "lightcoral";}
	else {
		this.disabled = true;
		this.style.color = "white" ;}
	if (currentNumber < 0) {
		CURRENT_NUMBER.style.color = "red" ;}
	CURRENT_NUMBER.innerHTML = currentNumber;

}
)