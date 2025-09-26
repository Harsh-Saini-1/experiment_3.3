// Person Class Hierarchy

// Base class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Subclass: Student, extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method overriding
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Subclass: Teacher, extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method overriding
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
  }
}

// --- Demonstration ---

// Create instances and call methods to show inheritance and overriding

// Create a Student instance
const student1 = new Student('Alice', 20, 'A');
console.log('--- Student Info ---');
student1.displayInfo(); // Calls the displayInfo method of the Student class

console.log(''); // Add a line break for readability

// Create a Teacher instance
const teacher1 = new Teacher('Mr. Smith', 45, 'Physics');
console.log('--- Teacher Info ---');
teacher1.displayInfo(); // Calls the displayInfo method of the Teacher class