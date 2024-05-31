import inquirer from 'inquirer';

interface Student {
  id: number;
  name: string;
  age: number;
}

const students: Student[] = [];

const mainMenu = async () => {
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['Add Student', 'List Students', 'Exit'],
  });

  switch (choice) {
    case 'Add Student':
      await addStudent();
      break;
    case 'List Students':
      listStudents();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
  }
};

const addStudent = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter student name:',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Enter student age:',
    },
  ]);

  const id = students.length + 1;
  const newStudent: Student = {
    id,
    name: answers.name,
    age: answers.age,
  };
  students.push(newStudent);

  console.log('Student added successfully!');
  mainMenu();
};

const listStudents = () => {
  console.log('List of Students:');
  students.forEach((student) => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`);
  });
  mainMenu();
};

mainMenu(); 