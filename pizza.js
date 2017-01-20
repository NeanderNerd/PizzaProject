function getTotal() {
   var text1 = "<h3>You Ordered:</h3>";
   var text2 = "";
   var sizeTotal = 0;
   var runningTotal = 0;
   var i = 0;
   var sizeArray = document.getElementsByClassName("sizes");
   for (i = 0; i < sizeArray.length; i++) {
      if (sizeArray[i].checked) {
         var selectedSize = sizeArray[i].value;
         text2 = text2+selectedSize+":<br>";
      }
   }
   if (selectedSize === "Personal Pizza") {
      sizeTotal = 6;
	  text2 = text2+"$"+sizeTotal+".00<br>";
   } else if (selectedSize === "Medium Pizza") {
      sizeTotal = 10;
	  text2 = text2+"$"+sizeTotal+".00<br>";
   } else if (selectedSize === "Large Pizza") {
      sizeTotal = 14;
	  text2 = text2+"$"+sizeTotal+".00<br>";
   } else if (selectedSize === "Extra Large Pizza") {
      sizeTotal = 16;
	  text2 = text2+"$"+sizeTotal+".00<br>";
   }
   runningTotal = sizeTotal;
   getSauce(runningTotal, text1, text2);
}

function getSauce(runningTotal, text1, text2) {
   var sauceTotal = 0;
   var sauceArray = document.getElementsByClassName("sauces");
   var i = 0;
   for (i = 0; i < sauceArray.length; i++) {
      if (sauceArray[i].checked) {
         var selectedSauce = sauceArray[i].value;
         text2 = text2+selectedSauce+":<br>";
      }
   }
   if (selectedSauce === "Marinara Sauce") {
      sauceTotal = 0;
	  text2 = text2+"$"+sauceTotal+".00<br>";
   } else if (selectedSauce === "White Sauce") {
      sauceTotal = 0;
	  text2 = text2+"$"+sauceTotal+".00<br>";
   } else if (selectedSauce === "Barbeque Sauce") {
      sauceTotal = 0;
	  text2 = text2+"$"+sauceTotal+".00<br>";
   } else if (selectedSauce === "No Sauce") {
      sauceTotal = 0;
	  text2 = text2+"$"+sauceTotal+".00<br>";
   }
   runningTotal = (runningTotal + sauceTotal);
   getCheese(runningTotal, text1, text2);
}

function getCheese(runningTotal, text1, text2) {
   var cheeseTotal = 0;
   var cheeseArray = document.getElementsByClassName("cheeses");
   var i = 0;
   for (i = 0; i < cheeseArray.length; i++) {
      if (cheeseArray[i].checked) {
         var selectedCheese = cheeseArray[i].value;
         text2 = text2+selectedCheese+":<br>";
      }
   }
   if (selectedCheese === "Regular Cheese") {
      cheeseTotal = 0;
      text2 = text2+"$"+cheeseTotal+".00<br>";
   } else if (selectedCheese === "No Cheese") {
      cheeseTotal = 0;
      text2 = text2+"$"+cheeseTotal+".00<br>";
   } else if (selectedCheese === "Extra Cheese") {
      cheeseTotal = 3;
      text2 = text2+"$"+cheeseTotal+".00<br>";
   }
   runningTotal = (runningTotal + cheeseTotal);
   getCrust(runningTotal, text1, text2);
}

function getCrust(runningTotal, text1, text2) {
   var crustTotal = 0;
   var crustArray = document.getElementsByClassName("crusts");
   var i = 0;
   for (i = 0; i < crustArray.length; i++) {
      if (crustArray[i].checked) {
         var selectedCrust = crustArray[i].value;
         text2 = text2+selectedCrust+":<br>";
      }
   }
   if (selectedCrust === "Plain Crust") {
      crustTotal = 0;
	  text2 = text2+"$"+crustTotal+".00<br>";
   } else if (selectedCrust === "Garlic Butter Crust") {
      crustTotal = 0;
	  text2 = text2+"$"+crustTotal+".00<br>";
   } else if (selectedCrust === "Cheese Stuffed Crust") {
      crustTotal = 3;
	  text2 = text2+"$"+crustTotal+".00<br>";
   } else if (selectedCrust === "Spicy Crust") {
      crustTotal = 0;
	  text2 = text2+"$"+crustTotal+".00<br>";
   } else if (selectedCrust === "House Special Crust") {
      crustTotal = 0;
	  text2 = text2+"$"+crustTotal+".00<br>";
   }
   runningTotal = (runningTotal + crustTotal);
   getMeat(runningTotal, text1, text2);
}

function getMeat(runningTotal, text1, text2) {
   var meatTotal = 0;
   var selectedMeat = [];
   var meatArray = document.getElementsByClassName("meats");
   var i = 0;
   for (i = 0; i < meatArray.length; i++) {
      if (meatArray[i].checked) {
         selectedMeat.push(meatArray[i].value);
         text2 = text2+meatArray[i].value+":<br>";
      }
   }
   var meatCount = selectedMeat.length;
   if (meatCount >= 1) {
      meatTotal = (meatCount - 1);
	  text2 = text2+"$"+meatTotal+".00<br>";
   } else {
      meatTotal = 0;
	  text2 = text2+"Vegetarian:<br>$"+meatTotal+".00<br>";
   }
   runningTotal = (runningTotal + meatTotal);
   getVeggy(runningTotal, text1, text2);
}

function getVeggy(runningTotal, text1, text2) {
   var vegTotal = 0;
   var selectedVeg = [];
   var vegArray = document.getElementsByClassName("veggy");
   var i = 0;
   for (i = 0; i < vegArray.length; i++) {
      if (vegArray[i].checked) {
         selectedVeg.push(vegArray[i].value);
         text2 = text2+vegArray[i].value+":<br>";
      }
   }
   var vegCount = selectedVeg.length;
   if (vegCount >= 1) {
      vegTotal = (vegCount - 1);
	  text2 = text2+"$"+vegTotal+".00<br>";
   } else {
      vegTotal = 0;
	  text2 = text2+"No Vegetables:<br>$"+vegTotal+".00<br>";
   }
   runningTotal = (runningTotal + vegTotal);
   document.getElementById("orderpopup").style.opacity=1;
   document.getElementById("text1").innerHTML=text1;
   document.getElementById("text2").innerHTML="<p>"+text2+"</p>";
   document.getElementById("runningtotal").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}

function getReset() {
	document.getElementById("frmTotal").reset();
	document.getElementById("orderpopup").style.opacity=0;
}