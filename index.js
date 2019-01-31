


let radius;

console.log('Hello World');
//declaring variable
let name= 'mosh';
console.log(name)

//declaring constant
const interestRate = 3.7;

console.log(interestRate);

//declaring object
let person = {
name: "darshan",
age:27
}
console.log(person);


// declaring an Array
let arrayNumbers = [1,2,3,4];


// declaring Function
function getName(name) {
    console.log("hello "+ name);
}


//calling declared function
getName(person)


//swapping two variables

let redColor = 'red';
let yelloColor ='yellow';

function swapColor(colorOne, colorTwo) {
    this.redColor = colorTwo;
    this.yelloColor = colorOne;
}

swapColor(redColor, yelloColor);
console.log("Logging red Color" + this.redColor);
console.log("Logging Yellow Color" + this.yelloColor);



//Loops Demo

//for loop
for(let i = 0; i < 5; i++) {
console.log('Hello world');
}

//For in loop
let arryNumbers =[1,6,8,9,0];
for (let index in arryNumbers) {
    console.log(arryNumbers[index])
}

//for of loop 
for (let value of arryNumbers) {
    console.log(value)
}



//Max of two numbers
function maxOfTwoNum(number1, number2) {
    if(number1>number2){
        return number1;
    }else
    return number2;
}

let maxOfTwo = maxOfTwoNum(12,3);

console.log('maxOfTwo number is ' + maxOfTwo)



// Constructor function Name should start with Caps
function Circle(radius) {
    this.radius = radius,
    this.diameter =radius*2,
    this.draw = function(){
        console.log('circle drawn with radius '+this.radius)
        console.log('circle drawn with Diameter '+this.diameter);
    }
}

const circleOne = new Circle(2);
console.log(circleOne.draw())


//Cloning an Object

const clonedObject = Object.assign({}, circleOne);
console.log('Cloned Object '+clonedObject);

//Cloning using ...
const cloneObject1 = { ...clonedObject};
console.log(cloneObject1);

//creating the address
function Address(street,city,postalCode){
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    this.showAddress = function(){
        console.log(`street: ${street} , city:${city}`)
    }
}

let bangloreAddress =  new Address('Malleshwaram','Banglore',572216)
bangloreAddress.showAddress();

//Array Operations
const numbers  = [4,5];
console.log(numbers);

//insert the element to the end of the array
numbers.push(6,7);
console.log(numbers);

//Insert element in the begining of the array.
console.log('before unshifting operation'+numbers)
numbers.unshift(1,2,3);

console.log('After Shifting operation'+numbers);

//insert the element in the middle of the array
console.log('\n');
console.log("before splicing the array");
numbers.splice(2,0,'Darshan');
console.log("After spliced"+numbers);


//Finding the elements in the Array of Objects

const courses = [
    {id:1, name:"a"},
    {id:2, name:"b"},
    {id:3, name:"c"}
]

//if it doesn't contain the object we expected it returns undefined or if it present it returns the entire found object
const isCoursePresent = courses.find( course => {
    return course.name ==='a' && course.id === 1;
})

const numArray = [1,2,3,4];
console.log("Find method for integers "+numArray.find(number=>{
    return number == 3
}))

console.log("is course present"+isCoursePresent);


//Empty the Array
courses.length = 0;


// or we could use 
// courses = []; we can use only if we have a single reference.
console.log(courses);


//Concatinate the Array 
const array1 = [1,2];
const array2 = [3,4];
console.log(array1.concat(array2));

      //Other way of combining array is using spread operator
      const combinedArray = [...array1, ...array2];
      const combinedArrayOfConst = [...array1,,'w', ...array2];
     
      console.log("Combined Array is "+ combinedArray)
      console.log(combinedArrayOfConst)

//Iterating an array 
for (let number of combinedArray) {
    console.log(number);
}
     //Iterating using forEach loop
     combinedArray.forEach(number => {
         console.log(number)
        });


//Sort on Array
const courseArray = [
    {id:1, name:"Node Js"},
    {id:2, name:"Js"}]
courseArray.sort();
console.log(courseArray);

        // Sorting technique
        courseArray.sort((a,b)=>{
               const firstArr = a.name.toUpperCase();
               const secondArr = b.name.toUpperCase();
                     if(firstArr > secondArr) return 1;
                     if(firstArr < secondArr ) return -1;
            return 0;
})
console.log(courseArray)


// Find Positive numbers in the array 
      // every() if it finds the negative then it won't continue further    
     //  some()  if it finds atleast one matched value then it wont continue further

const positiveNumArr = [-1,2,3,4];

    const isPositiveNum = positiveNumArr.every(number=>{
        return number>=0;
    })
    console.log(isPositiveNum);

   const someDemo =  positiveNumArr.some(function(num){
        return num<0;
    })

    console.log(someDemo);


// Filtering an Array 
 const arryToBeFilter = [1,3,-2,4,-7];

    let filteredArray = arryToBeFilter.filter(number=>number>0);
    console.log(filteredArray)


// Function Declaration

    /**
     * Two way of declaring the function 
     * 1] function declaration;
     * 2] Anonymous function declaration
     */

     // 1st way of declaring the function is 

     function walk(){
         console.log('walking');
     }
    walk();
     // 2nd way is Anonymous function declaration

     let run = function(){
                            console.log('running');
                        };
   run();

// Hoisting : process of moving the functions to the top of the js File is called hoisting;


//Setters and Getters

const personObj = {
    firstName:'darshan',
    lastName: 'MN',
    get fullName(){
        return '${personObj.firstName} ${personObj.lastName}'
    },
    set fullName(value) {
     const parts = value.split(' ');
     this.firstName = parts[0];
     this.lastName = parts[1];
    }
};

console.log('full name is'+personObj.fullName);

personObj.fullName = "Navya HE";
console.log(personObj);


//Reducer concept

const reducerArray = [1,2,3,4,5];

const reduceArrayResult = reducerArray.reduce((sum1,value) =>{
   return sum1+value;
},0);

console.log("Reducing the concept"+reduceArrayResult)



let foods = [
    {name: 'steak', calories: 1},
    {name: 'fruit', calories: 2},
    {name: 'salad', calories: 1},
    {name: 'chips', calories: 3},
    {name: 'ice cream', calories: 1},
  ]; 
    
  let total = foods.reduce((sum, item)=>{ 
    return sum + item.calories; 
  }, 0)

  console.log(total);




