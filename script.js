const income = 100;
if(income > 50) {
     
    console.log("доход больше 50");
}

const income2 = 150;
const age = 22;
if(income2 >= 50 && age >= 18){
 
    console.log('доход больше 50$: ${income2}');
    console.log("возраст больше 18");
}

else{
    console.log("доход превыше 100$");
    console.log("возраст больше 18");

}

let myVar;
if (myVar == undefined && myVar == null) {
    console.log(`Переменная myVar имеет значение: ${myVar}`);
}

const incom = 350;
if(incom < 200){
 
    console.log("Доход ниже среднего");
}
else if(incom>=200 && incom<300){
     
    console.log("Чуть ниже среднего");
}
else if(incom>=300 && incom<400){
     
    console.log("Средний доход");
}
else{
    console.log("Доход выше среднего");
}

let x = NaN;
console.log(x);

const income3 = 500;
switch(income3){
 
    case 100 : 
        console.log("Доход равен 100");
        break;
    case 200 : 
        console.log("Доход равен 200");
        break;
    case 300 : 
        console.log("Доход равен 300");
        break;
    default: 
        console.log("Доход больше нормы(100-300)" + '\n' + "Ваш доход - ", income2);
        break;
    }

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log("Конец работы");

for(let i = 12; i > -10; i-=2){
      
    console.log(i);
}
console.log("Конец работы");

let i = 0;
for(; i < 100;){
      
    console.log(i);
    i = i + 40;
}


console.log("Конец работы");

for(let i = 10, j=3; i < 5, j < 4; i++, j++){
      
    console.log(i + j);
}

console.log("Конец работы");
for(let a=1; i <= 5; a++){
      
    for(let j = 1; j <=5; j++){
       console.log(a * j);
    }
}

let f = 1;
while(f <=20){
     
    console.log(f);
    f++;
}

console.log("Конец работы");

let g = 1;
do{
    console.log(g);
    g++;
}
while(g <= 5){
}
console.log("Конец работы");

let ii = 1;

for(let ii=1; ii <= 10; ii++){
      
    if(ii===6) break;
    console.log(ii);
}
console.log("Конец работы");

const person = {name: "Tom", age: 37};
for(prop in person){
    console.log(prop);
}
console.log("    ");


const website = "KAZHI MARAT";
for(ch of website){
      
     console.log(ch);
}

const people = ["Tom", "Sam", "Bob"];
for(const person of people) {
    console.log(person);
} 