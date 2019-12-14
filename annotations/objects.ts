const profile = {
    name: 'Tunahan YILMAZ',
    age: 25,
    coords: {
        lat:29,
        lng:40,
    },
    setAge(age: number): void{
        this.age = age;
    }
}

//destructuring a property from an object

const {age} : {age: number} = profile;

const{coords: {lat, lng}} : {coords:{lat: number, lng: number}} = profile;