const people = ["MARAT", "AMIR", "TURAN"];
        console.log(people);// ["Tom", "Alice", "Sam"];    

        const guys = ["Tom", "Alice", "Sam"];
        console.log(guys[0]); // Tom
        const third = guys[2]; // Sam
        console.log(guys[1]); // Alice
        console.log(third); // Sam

        const guys1 = ["Tom", "Alice", "Sam"];
        console.log(guys1)
        console.log(guys1[0]); // Tom
        guys1[0] = "Bob";
        console.log(guys1[0]); // Bob
        console.log(guys1)

        guys1[1] = "Amir";
        console.log(guys1)

        const guys2 = ["Tom", "Alice", "Sam"];
        console.log(guys2[7]); // undefined - в массиве только три элемента
        guys2[7] = "Bob";
        console.log(guys2);

        console.log("             ");


        const objects = ["Tom", 12, true, 3.14, false];
        console.log(objects);

        console.log("             ");


        const numbers1 = [0, 1, 2, 3, 4, 5 ]; // одномерный массив
        const numbers2 = [[0, 1, 2], [3, 4, 5] ]; 
        console.log(numbers1);
        console.log(numbers2);

        console.log("             ");

        const people2 = [
        ["Tom", 225, false],
        ["Bill", 328, true],
        ["Alice", 221, false]
        ];
        
        console.log(people2[1]); // ["Tom", 25, false]
        console.log(people2[2]); // ["Bill", 38, true]


        const people3 = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
        ];
        people3[0][1] = 200;
     
        people3[1][1] = 215;
        
        people3[2][0] = "MARAT";
        people3[2][1] = 19;


        console.log(people3);


        const numbers = [];
        numbers[0] = []; // теперь numbers - двумерный массив
        numbers[0][0]=[]; // теперь numbers - трехмерный массив
        numbers[0][0][0] = [[["123", 12, true]]]; // первый элемент трехмерного массива равен 5
        console.log(numbers[0][0][0]);