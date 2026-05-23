const display = document.getElementById("display");

/* APPEND VALUES */

function appendValue(value){

  display.value += value;

}

/* CLEAR DISPLAY */

function clearDisplay(){

  display.value = "";

}

/* DELETE LAST CHARACTER */

function deleteLast(){

  display.value = display.value.slice(0, -1);

}

/* CALCULATE RESULT */

function calculateResult(){

  try{

    display.value = eval(display.value);

  }

  catch(error){

    display.value = "Error";

  }

}