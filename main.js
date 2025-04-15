function FoodChecker() {
	var forder = document.getElementById('inputFchoice').value;

	switch (forder) {
	case "B":
		document.getElementById('result').innerHTML = "You ordered a burger.";
		break;
	case "F":
		document.getElementById('result').innerHTML = "You ordered fries.";
		break;
	case "S":
		document.getElementById('result').innerHTML = "You ordered a sods.";
		break;
	default:
		document.getElementById('result').innerHTML = "Invalid input. Please give another response.";
	}

}