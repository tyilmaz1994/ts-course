const carMakers: string[] = ['toyota', 'fiat', 'chevy', 'porsche']; // string array

const arrayEx = []; // typescript can't guess what the type is. it's any[]

const arrayEx1: string[] = []; //empty string array

const arrayEx2: (string|boolean)[] = [];
arrayEx2.push(true);
arrayEx2.push('stringText');

console.log(carMakers.map((car: string, i: number): string =>{
    return `${i+1}. ${car.toUpperCase()}`;
}));
