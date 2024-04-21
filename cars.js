const cars = [
    {
        id: 0,
        make: "Toyota",
        model: "Yaris",
        year: 2001,
        color: "white",
    },
    {
        id: 1,
        make: "Volkswagen",
        model: "Golf",
        year: 2005,
        color: "black",
    },
    {
        id: 2,
        make: "BMW",
        model: "i4",
        year: 2015,
        color: "red",
    },
    {
        id: 3,
        make: "Mercedea",
        model: "CLA",
        year: 2001,
        color: "grey",
    },
    {
        id: 4,
        make: "Citroen",
        model: "C3",
        year: 2009,
        color: "yellow",
    }
];

function getCars(){
    return cars;
}

function getCarInformation(id){
    const car = getCars().find((cars) => cars.id === id);
    if(car){
        return `Make: ${car.make}, Model ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
            }else{
                return "Car doesn't exist";
            }
}

function getCarAge(id){
    const car = getCars().find((cars) => cars.id === id);

    if(car)
    {
        const currentYear= new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`
    }
    else{
        return "Car doesn't exist";
    }
}

module.exports = {
    getCars,
    getCarInformation,
    getCarAge,
}