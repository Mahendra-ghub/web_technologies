       
let students = ["Kamna", 'Karunesh', 'Vishal', 'Ankit', 'Karan'];

// Insert (–) after each element.
let hyphen = "";
for(let i =0; i<students.length;i++){
   hyphen = hyphen + students[i] +"-"; 
}
console.log(hyphen);

// Replace Komal with ‘Abhishek’ using splice method
students.splice(0,1,"Abhishek");
console.log(students);

// Check if ‘Karan’ is present in the array.
let isPresent = students.includes("Karan");
console.log(isPresent);

// Return the position of Abhishek from the array.
let index = students.indexOf("Abhishek");
console.log(index);

// Insert ‘Aayush’ at index 0 and ‘Aman’ at the last
students.unshift("Aayush");
students.push('Aman');
console.log(students);

// Remove ‘Aayush’ from index 0 and ‘Aman’ from last
students.shift();
students.pop();
console.log(students);


// Return String Karunesh, Abhishek, Kartik from array student

for(let i = 0; i<students.length;i++){
    if(students[i] == "Karunesh" || students[i] == "Abhishek" || students[i] == "Kartik"){
        console.log(students[i]);
    }
    
}