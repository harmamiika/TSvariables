const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];

// tuplet yleensä huonompia kuin objektit koska epäselvyys
// esim csvssä voi kuitenkin olla ok

