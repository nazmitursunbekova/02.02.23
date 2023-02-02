function printMyName(name) {
  console.log(name);
} 
printMyName("Erjan")


function pritntMyFilm(film){
  console.log("film");
}
pritntMyFilm("TItanik")

 function printMyBook(book){
  console.log("book");

}
printMyBook("Aitmatov");

function printMyFriend(friend){
  console.log("friend");
}
printMyFriend("Adina")


function printMyMother(){
  console.log("mother");
}
printMyMother("Syrge");



function area(width, height){
  let result = width * height;
  return result;
}
let a = area(5, 5);
let b = area(6, 6);

if (a <=b){
  console.log("Yes it does")
}
else {
  console.log("No it doesn't")
}
function getUSD(kgs){
  return kgs * 87.5;

}

let example1 = getUSD(100);
let example2 = getUSD(150);
console.log(example1);
console.log(example2);

function getFarenheit(c){
  return c * 1.8+32;
}
let temp = getFarenheit(100);  //212
console.log(temp)

getKilometers(30); //мили в км


function getKilometers(km){
  return km*1.60934
}

let km = getKilometers(20)
console.log(km)


getCm(20); //дюйми в см

function getCm(cm){
  return cm * 2.54
}

let cm = getCm(20)
console.log(cm)


let i = 1;
console.log(i);

i=2;
console.log(i);

i= i+2
console.log(i)

i += 1;
i -= 1;
console.log(i)



let num = 1;
 while (num <= 10){
  console.log(num);
  num++;
}


let num4 =10
while (num4>=1){
console.log(num4);
num4--;
}


for (let a=10; a <=1; a++){

  console.log(a)
  
} 

let car1Fuel=10;
let car2Fuel=15;
let fuel = 50;

let distance="";
for (let i = 0; i <= fuel; i +=car1Fuel){
   distance+= "-"; 
}
distance="";
for (let i = 0; i <= fuel; i +=car2Fuel){
   distance+= "-"; 
}
console.log(distance);