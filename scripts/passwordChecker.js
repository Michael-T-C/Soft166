// JavaScript source code

var password = document.getElementByID("passwordText")
var charNum = 0;
var strengthBar = document.getElementById("strengthMeter")
var strength = 0;

function checkPassword() {

	if (password.match(/[a-z]+/)) {
		strengthBar.value += 5
	}
	if (charNum.value > 5) {
		strengthBar.value = 5
	}
	if (password.match(/[0-9]+/)) {
		strength += 1
	}
	if (password.match(/[<>?#~@]+/)) {
		strength += 1
	}
	if (password.match(/[!£$%^&*]+/)) {
		strength += 1
	}
	if (password.length > 5) {
		strength += 1
	}
	if (password.length > 7) {
		strength += 1
	}
	if (password.length > 11) {
		strengthBar.value += 5
	}
	switch (strength) {
		case 0:
			strengthBar.value = 10;
			break
		case 1:
			strengthBar.value = 40;
			break
		case 2:
			strengthBar.value = 60;
			break
		case 3:
			strengthBar.value = 80;
			break
		case 4:
			strengthBar.value = 100;
			break

	}
}