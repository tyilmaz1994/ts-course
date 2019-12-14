
//there is no type annotations for arguments. we have to put types for every parameter. otherwise parameter is known as any 
const add = (a: number, b: number): number => {
    return a + b;
};
//return type is inferred by typescript but it's not safe. for ex:

const substract = (a: number, b: number) =>{ // I did not return any value and typescript is inferred return type as void. But we want to return a number.
    a - b; // typescript guess return type by looking what the return value type is.
}; // return type must be annotate always. it's tricky when inferred

//same on functions

function divide(a: number, b: number): number{
    return a/b;
}

//also same on function expression

const multiply = function (a: number, b: number): number {
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);
};

//never return type is known as function never ends.
//if we use some cases for throw error. for ex: if message is not null, then throw error. return type must be void.
const throw_error = (message: string): never => {
    throw new Error(message);
}

//destructing with annotation

const today_weather = {
    date: new Date(),
    weather: 'windy',
};

//pulling 2 properties of an object.
const log_weather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

log_weather(today_weather);