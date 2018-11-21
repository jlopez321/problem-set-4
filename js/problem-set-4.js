/*
 * Hello. 2 points.
 */

 function hello() {

   document.getElementById("output1").innerHTML=("Hello, AP Computer Science Principles!");

   ////////////////// DO NOT MODIFY
   check("hello"); // DO NOT MODIFY
   ////////////////// DO NOT MODIFY
 }

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY      Use the @name letiable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.
name = prompt("What is your name?");
if (name != null) {
    document.getElementById("output2").innerHTML ="Hello, " + name + "!" ;

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  document.getElementById("output3").innerHTML=cels + " degrees Celsius equals " + (cels*1.8 + 32).toFixed(2) + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  document.getElementById("output4").innerHTML=fahr + " degrees Fahrenheit equals " + ((fahr-32)*(5/9)).toFixed(2) + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

let miles=Math.floor (inches/63360);
let yards=Math.floor ((inches - (miles*63360))/36);
let feet = Math.floor(inches / 12);
inches=Math.floor ((inches - (miles*63360) - (yards*36) - (feet*12))/1);
document.getElementById ("output5").innerHTML="Miles: " + miles + "<br/>Yards: " + yards + "<br/>Feet: " + feet + "<br/>Inches: " +inches;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers=Math.floor (centimeters/100000);
  let meters=Math.floor((centimeters - (kilometers*100000))/100);
  centimeters=Math.floor ((centimeters - (kilometers*100000) - (meters*100))/1);
  document.getElementById("output6").innerHTML= "Kilometers: " +kilometers + "<br/>Meters: " + meters + "<br/>Centimeters: " + centimeters;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}
/*
 * Fluid Ounces. 5 points.
 */
function fluidOunces() {
  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY
  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.
  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

let gallons = Math.floor(fluidOunces / 128);
  fluidOunces = fluidOunces % 128;
  let quarts = Math.floor(fluidOunces / 32);
  fluidOunces = fluidOunces % 32;
  let pints = Math.floor(fluidOunces / 16);
  fluidOunces = fluidOunces % 16;
  let cups = Math.floor(fluidOunces / 8);
  fluidOunces = fluidOunces % 8;
   
  document.getElementById("output7").innerHTML=("Gallons: "+gallons+"</br>Quarts: "+quarts+"</br>Pints: "+pints+"</br>Cups: "+cups+"</br>Fluid Ounces: "+fluidOunces);
 
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

    let tons=Math.floor(ounces/32000)
  let pounds= Math.floor((ounces - (tons*32000))/16);
  ounces= Math.floor((ounces - (tons*32000) - (pounds*16))/1);
  document.getElementById("output8").innerHTML="Tons: " + tons + "<br/>Pounds: " + pounds + "<br/>Ounces: " + ounces;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

    let dollar=Math.floor((pennies)/100);
  let quarter=Math.floor((pennies - (dollar*100))/25);
  let dime=Math.floor((pennies - (dollar*100) - (quarter*25))/10);
  let nickel=Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10))/5);
  pennies=Math.floor((pennies - (dollar*100) - (quarter*25) - (dime*10) - (nickel*5))/1);
  document.getElementById("output9").innerHTML="Dollars: " + dollar + "<br/>Quarters: " + quarter + "<br/>Dimes: " + dime + "<br/>Nickels: " + nickel + "<br/>Pennies: " + pennies;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}
/*
 * Change. 8 points.
 */
function change() {
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.
  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
 let quarter=Math.floor((amount)/25);
let dime=Math.floor((amount - (quarter*25))/10);
let nickel=Math.floor((amount - (quarter*25) - (dime*10))/5);
let pennies=Math.floor((amount - (quarter*25) - (dime*10) - (nickel*5))/1);
let coins=quarter+dime+nickel+pennies
if (coins == 1) {
    suffix = " coin.";
  }
  else {
    suffix = " coins.";
  }
  document.getElementById("output10").innerHTML=(coins+suffix)
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

