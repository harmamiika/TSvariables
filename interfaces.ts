// huom CAPS
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const soda = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// funktion täytyy täyttää vehicle-interfacen kriteerit, saa olla ylimääräistä!
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);