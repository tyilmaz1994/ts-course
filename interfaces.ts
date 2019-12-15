const old_civic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}\nYear: ${this.year}\nBroken? ${this.broken}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar.`;
    }
};

const print_vehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}\nYear: ${vehicle.year}\nBroken? ${vehicle.broken}`);
};

print_vehicle(old_civic);

//with interface

interface IReport{
    // name: string;
    // year: number;
    // broken: boolean;
    summary(): string;
}

//this function can be used by any object that can satisfy IReport interface.
const print_summary = (item: IReport): void => {
    console.log(item.summary());
};

// theese two objects (old_civic and drink) has summary function. so they can be IReport
//print_summary is looking for a IReport argument to perform it's action.
//we did not relate below objects with IReport interface. Typescript checks that is it compatible or not.

print_summary(old_civic);
print_summary(drink);