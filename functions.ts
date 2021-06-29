const add = (a: number, b: number): number => {
    return a + b;
};

// funktioiden parametrien annotaatiot tarvitaan käytännössä aina
// palautusvaluen arvo ei mandatory, laitamme aina kuitenkin

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

// ES2015 destrukturoitu objekti annotattu
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

