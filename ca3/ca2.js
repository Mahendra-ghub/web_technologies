let students = ['Kamna', 'Karunesh', 'Vishal', 'Ankit', 'Karan'];
  console.log("Length of array:", students.length);

 
  let withHyphens = students.map(student => student + "-");
  console.log("Array with hyphens:", withHyphens);

  let index = students.indexOf('Komal');
  if (index !== -1) {
    students.splice(index, 1, 'Abhishek');
  }
  console.log("Array after replacing Komal:", students);

  let isKaranPresent = students.includes('Karan');
  console.log("Is Karan present in the array:", isKaranPresent);

  let positionOfAbhishek = students.indexOf('Abhishek');
  console.log("Position of Abhishek:", positionOfAbhishek);

  students.unshift('Aayush');
  students.push('Aman');
  console.log("Array after inserting Aayush and Aman:", students);

  students.shift();
  students.pop();
  console.log("Array after removing Aayush and Aman:", students);

  let selectedStudents = students.filter(student => ['Karunesh', 'Abhishek', 'Kartik'].includes(student));
  let selectedStudentsString = selectedStudents.join(', ');
  console.log("Selected students:", selectedStudentsString);


  for(let i = 0; i<students.length;i++){
    if(students[i] == "Karunesh" || students[i] == "Abhishek" || students[i] == "Kartik"){
        console.log(students[i]);
    }
    
}
