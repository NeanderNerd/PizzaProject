function getTotal() {
	var text1 = "<h3>You Ordered:</h3>";
	var text2 = "";
	var sizeTotal = 0
	var runningTotal = 0;
	var sizeArray = getElementsByClassName('sizes');
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text2 = text2+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize ==== "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getSauce(runningTotal, text1, text2);
}

function getSauce(runningTotal, text1, text2) {
	var sauceTotal = 0;
	var sauceArray = getElementsByClassName('sauces');
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text2 = text2+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	getCheese(runningTotal, text1, text2);
}

function getCheese(runningTotal, text1, text2) {
	var cheeseTotal = 0;
	var cheeseArray = getElementsByClassName('cheeses');
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
			text2 = text2+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	}else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	runningTotal = (runningTotal + cheeseTotal);
	getCrust(runningTotal, text1, text2);
}

function getCrust(runningTotal, text1, text2) {
	var crustTotal = 0;
	var crustArray = getElementsByClassName('crusts');
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text2 = text2+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Suffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	getMeat(runningTotal, text1, text2);
}

function getMeat(runningTotal, text1, text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = getElementsByClassName('meats');
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			selectedMeat.push(meatArray[i].value);
			text2 = text2+meatArray[i].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggy(runningTotal, text1, text2);
}

function getVeggy(runningTotal, text1, text2) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = getElementsByClassName('veggy');
	for (var i = 0; i < vegArray.length; i++) {
		if (vegArray[i].checked) {
			selectedVeg.push(vegArray[i],value);
			text2 = text2+vegArray[i].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	