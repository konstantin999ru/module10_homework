let userInput = prompt("введите значение: ");

let number = +userInput;

if (typeof number === "number" && !isNaN(number)){
  
  if (number % 2 === 0) {
  console.log("число четное");
    
} else {
  console.log("число не четное");
}

} else {
  console.log("Упс, кажется, вы ошиблись");
}




let x = undefined;

if (typeof x === "number"){
  console.log("x - число");
  
}else if (typeof x === "string"){
  console.log("x - строка")
  
} else if (typeof x === "boolean"){
  console.log ("x - логический тип")
  
} else {
  console.log("тип неопределен")
}
