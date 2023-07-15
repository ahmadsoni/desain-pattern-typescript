import operation from "./OperationService.ts";

const calculate = (): number => {
    let num1: number = 20;
    let num2: number = 30;

   return operation(num1, num2);
}
const calculate2 = (): number => {
    let num1: number = 20;
    let num2: number = 40;

   return operation(num1, num2);
}

console.log(calculate());
console.log(calculate2());