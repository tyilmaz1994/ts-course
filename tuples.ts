const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// type alias
type DRINK = [string, boolean, number];

//tuple.
const tuple_drink: DRINK = ['brown', true, 40];

//we cannot keep meaning data in tuple. Objects are better choices then tuple. because property names are better than numbers. for ex:
//drink.color or tuple_drink[0]

