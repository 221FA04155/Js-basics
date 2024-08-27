// Task 1: Simple Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('calculator-result').textContent = `Result: ${result}`;
}

// Task 2: Array Operations
function sumEvenNumbers() {
    const input = document.getElementById('array-input').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
    document.getElementById('array-result').textContent = `Sum of even numbers: ${sum}`;
}

// Task 3: Object Manipulation
const person = {};

function createPerson() {
    person.firstName = document.getElementById('first-name').value;
    person.lastName = document.getElementById('last-name').value;
    person.age = parseInt(document.getElementById('age').value);
    person.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };

    document.getElementById('person-result').textContent = `Person created: ${person.getFullName()}, Age: ${person.age}`;
}

function incrementAge() {
    if (person.age !== undefined) {
        person.age++;
        document.getElementById('person-result').textContent = `Person: ${person.getFullName()}, Age: ${person.age}`;
    } else {
        document.getElementById('person-result').textContent = 'Please create a person first.';
    }
}