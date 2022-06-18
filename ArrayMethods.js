EvenNumbers = [2, 4, 6]
OddNumbers = [1, 3, 5, 9, 11]
PrimeNumbers = [7, 9, 10, 7]

// FirstTwoNumbers = EvenNumbers.concat(OddNumbers, PrimeNumbers);
// console.log(FirstTwoNumbers);

// ThreeNumbers = FirstTwoNumbers.concat(PrimeNumbers);
// console.log(ThreeNumbers);

// EvenNumbers.pop();
// console.log(EvenNumbers)

// OddNumbers.shift()
// console.log(OddNumbers)

// OddNumbers.push(25);
// console.log(OddNumbers);


//OddNumbers.unshift(13);
// console.log(OddNumbers);

//delete OddNumbers[2];
// console.log(OddNumbers);

//OddNumbers[2] = 17;
// console.log(OddNumbers);

//OddNumbers.splice(0, 2);

let NewOddNumbers = OddNumbers.slice(0, 3);
console.log(OddNumbers);
console.log(NewOddNumbers);


let NewOddNumbers2 = OddNumbers.splice(0, 3);
console.log(OddNumbers);
console.log(NewOddNumbers2);

