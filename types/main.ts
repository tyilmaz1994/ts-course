
//typeScript object that has type. today variable represents the Date type 
const today = new Date();
today.getDay();

//javascript object. when we hover the mouse  cursor to age property. Popup shows up and says "(property) age: number". When we don't use type in typescript
//there will be always default type.
const person = {
    age: 20
};

//typescript class
class Color { }

//red variable type is Color.
//when we want to use the red variable properties or functions, nothing will be show up after 'red.' (autocomplete shows nothing.)  because Color has not property or a function
const red = new Color();
