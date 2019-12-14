
//:number is annotation and :number says that appleCount is a number and you cannot assign string or bool or anything different from number.
const appleCount: number = 5;

//Array
//: string[] annotation is just says colors variable may contain strings... It does not create array. equality of right side creates the actual array.
let colors: string[] = ['red', 'blue', 'yellow'];
let myFavNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false, true];

//if initialization is not done, then the variable is not created.

//Class
class Car {

}

let car: Car = new Car();

//Object literal
let screenSize: { width: number, height: number } = {
    width: 100,
    height: 300,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

//initializing a declared variable on the same line with no annotation is called inference. typescript guess what the variable type is.
//e.g.:
let countOfApples = 5; // hover the mouse cursor and you'll se that countOfApples type is number.
let fails = false; // also this type will be guessed as boolean by typescript...

//lets write an example that typescript will be confused.
let nameOfIt; // so typescript give the any type because typescript guess type of value according to initialization of variable
nameOfIt = 'typescript'; // type is still same becaouse declaration and initialization is not on the same line.

// any type

const json = '{"x":11,"y":22}';
const coordinates = JSON.parse(json); //coordinates variable type is any. which means typescript no idea what it should be.
//when the type is any, we can write anything after coordinates. and typescript again has no idea whether there is a property or not.
//e.g.:
console.log(coordinates.foo); // there is no property called foo on coordinates variable. 
//if we in something like this situation. if we see any type is choosen by typescript (btw it's called imference), we need to fix (convert) any type.

//fixing the any type that JSON.parse returns...
const coordinates_again: {x: number, y: number} = JSON.parse(json); // we assign type the properties of json. so there is not any type anymore. hover the mouse cursor and u'll see...
//also we cannot write coordinates_again.foo becouse typescript (annotation) is not let us write.

//variable whose type cannot be inferred correctly

let randomNumbers : number[] = [10, -10, -1];
let numberAboveZero : boolean | number = false; // the variable can be boolean or number.

for(let i=0; i<randomNumbers.length; i++){
    if(randomNumbers[i] > 0)
        numberAboveZero = randomNumbers[i];
}