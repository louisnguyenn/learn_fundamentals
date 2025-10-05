// let age: number = 13;

// if (age <= 13)
// {
//   console.log('Hello World');
// }

// let numbers: number[] = [1, 2, 3];
// numbers.forEach(n => n)

// let user: [number, string, boolean, number] = [1, 'Louis', true, 0];
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(10_000);

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: 'Louis',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.id = 0;
// employee.name = 'Louis';

// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === 'number') {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs('10kg');

// type Draggable = {
//   drag: () => void;
// };

// type Resizeable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizeable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal (exact, specific) value
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
