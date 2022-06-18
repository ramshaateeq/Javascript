let numbers = [1,2,3,4,5]
console.log(numbers)

let cars = ['ford', 'mercedes', 'mehran']
console.log(cars)

console.log(cars[2]);

cars[2] = 'civic';
console.log(cars)

cars.push ('mehran');
console.log(cars)


numbers.push(6)
console.log(numbers)

console.log(numbers.length);
console.log(cars.length)

let x;
for (x in cars)
{
    console.log(cars[x])
}