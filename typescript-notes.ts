// Built-in types
let sales = 123_456_789; // 123456789
let course: string = 'TypeScript'; // TypeScript
let is_published: boolean = true; // true

// Arrays
let numbers: number[] = [];
numbers.forEach(n => n.toString());

//Tuples
let user: [number, string] = [1, 'John'];
user.push(1);

// Enums
const small = 1;
const medium = 2;
const large = 3;

enum Size { Small, Medium, Large }; // by default Small = 0, Medium = 1, Large = 2
enum CustomSize { Small = 1, Medium = 2, Large = 3 }; // Small = 1, Medium = 2, Large = 3
let cupSize: Size = Size.Small; // 0

const enum optimisedSize { Small = 3, Medium = 4, Large = 5 };
let optSize: optimisedSize  = optimisedSize.Medium;  // Small = 1, Medium = 2, Large = 3

// Functions
function calculateTax(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022) 
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000);

function calculateTaxDefault(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTaxDefault(10_000, 2023);

// Object

// Type alias
type Employee = {
    readonly id: number,
    name: string,
    retireDate: (date: Date) => void
}

let employee: {
    readonly id: number,
    name: string,
    retireDate: (date: Date) => void
} = { 
    id: 1, 
    name: 'John',
    retireDate: (date: Date) => {console.log(date)}
};

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');
