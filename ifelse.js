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