// console.log('hello world');
// console.error('this is an error');
// console.warn('this is a warning');

// // //var, let , const
// let age;
// age = 31;
// console.log(age);


// //always use const unless you know you know you want to reassign a value.
// //this example is going to give an error because const is not used for reassigning unlike let
// //let is used to reassign a value.

// //example

// const ball = 56;
// console.log(ball);


//the above example is how const works. you have to assign const to a value.
//for const, you have to assign it to a value

//string, numbers, decimals, boolean, null, undefined, symbol.

//string

//you can either use double or single quotes.

// const name = 'Chiamaka';  //string
// const age = 23; //numbers , they dont have quotes around them

// // const rating = 4.5;  //decimal
// // const isCool = true;  //boolean
// // const x = null;  //null
// // const y = undefined; //undefined eg 1
// // let z;  //undefined eg 2


// //concatenation
// console.log('My name is name and I am age')
// console.log('My name is ' + name + ' and I am ' + age);
// //template string
// console.log(`My name is ${name} and I am ${age}`);
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// //PROPERTY , a poperty does not have parenthesis. () - this is a parenthesis.
// //if it has a parenthesis, it is a METHOD.
// const s = 'Chiamaka is here, learning, javascript';
// console.log(s.length); //this is to know the length of the string. space counts.
// console.log(s.toUpperCase()); //to capitalize. touppercase is a method because it has a method
// console.log(s.toLowerCase()); // lowercase. touppercase is a method because it has a method
// console.log(s.substring(0 , 8).toUpperCase()); // lowercase. touppercase is a method because it has a method
// console.log(s.split(',')); //breaking the arrays down using the comma.
// console.log(s.split(''));

// //ARRAYS - variables that hold multiple values
// const fruits =  ['apples', 'oranges','pineapples', 'pears'];

// fruits[4] = 'bananas'; // adding a value to the array
// fruits.push('guavas'); // push a value to the array
// fruits.unshift('strawberries'); // adding a value at the beginning without replacing the first value
// fruits.pop(); //to remove the last value
// console.log(Array.isArray(fruits)); //boolean to know if fruits which represents the array is true or false
// console.log(fruits.indexOf('apples')) // to check the index of a value, 
// console.log(fruits);
 

//OBJECT LITERALS - basically key value pairs. 

// const person = {
//     firstName: 'Chiamaka',
//     lastName: 'Nwabuzor',
//     age: 23,
//     hobbies: ['reading', 'movies' , 'music', 'sleeping'], //arrays
//     address: {  //embedded objects 
//         street: 'egbelu street',
//         city: 'Port Harcourt',
//         state: 'rivers'
//     }
// }
// console.log(person.firstName);

// const {firstName , lastName} = person; //destructuring
// console.log(firstName, lastName)

// person.email = 'chi@gmail.com';  // add values to person
// console.log(person.email)

//ARRAYS OF OBJECTS
// const todos =[
//     {
//         id:1,  //id is a key
//         text: 'take out trash', //same with text and the others
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'dentist appt',
//         isCompleted: false
//     },

    
// ]
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// //FOR LOOP
// for (let i = 0; i <= todos.length; i++) {
//     // const element = array[index];
//     console.log(todos[i].id);
    
// }

// //WHILE LOOP
// let i = 0;
// while(i<45){
//     console.log(i);
// }

// //FOR OF LOOP
// for (let todo of todos) {  //todo is a random name chosen to represent todos just like we have 'i' in loops
//     console.log(todo.text);
// }

//FOR EACH,

//function()
// todos.forEach(function(todo) {
//     console.log(todo.text);
// }
// )

//MAP
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText)


//FILTER
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted ===true;
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted);

//CONDITIONAL STATEMENTS

//IF

// const x = 10;
// if (x == 10) { //double equal, it doesnt match the data type, using 10 as a string will still result in 'x is 10'
//     console.log('x is 10');
// }

//IF... ELSE

// const x = 20;
// const y = 10;


// if (x > 5 && y > 10) { //double equal, it doesnt match the data type, using 10 as a string will still result in 'x is 10'
//     console.log('x is more than 5 or y is more than 10');
// }
// // else if (x > 10) {
// //     console.log('x is greater than 10')
// // }
// // else{
// //     console.log('x is less than 10')
// // }


//TURNARY OPERATOR -basically like a shorthand 'if statement' and it's used a lot to assign variables based on a condition

// const x = 10;
// // const color = x > 10 ? 'red' : 'blue';
// const color = 'green';

// //the statement above is explained thus. color is the variable assigned.
// // x > 10 is the condition. so it is if 'x > 10'
// //? is the turnary operator. it means 'then'
// //: is represented with a column and it means 'else'

// // console.log(color);
// //it is going to show blue because x is not greater than 10.
// switch (color) {
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'blue':
//         console.log('color is blue')
//         break;
//     default:
//         console.log('color is NOT red or blue')
//         break;
// }


//FUNCTIONS
function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums(5,4);

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addNums();

function addNums(num1 = 1, num2 = 1){  //default values assigned to the parameters num1, num2
    console.log(num1 + num2);
}
addNums(5 , 5);  //this is going to override the default values

function addNums(num1 = 1, num2 = 1){  //default values assigned to the parameters num1, num2
    return num1 + num2;  //when using return, you dont put the following values in a bracket
}
console.log(addNums(5 , 5));  //this is going to override the default values
