let i;

for (i = 1 ; i <= 5 ; i++)
{
    console.log('value of i is :' +i)
}

// let country = ['uK', 'scotland', 'ireland'];
// let y;
// for (y in country)
// {
//     console.log(country[y])
// }

// let cities = ['lahore', 'multan', 'london'];
// let x;
// for (x in cities)
// {
//     console.log(cities[x])
// }

// let x;

// for (x=0 ; x <=10 ; x++)
// {
//     console.log('This is x :' +x)
// }

let names = ['rabia', 'amna', 'aisha']
let y;

// for (y in names)
// {
//     console.log((y) + names[y])

// }

for (y of names)
{
    console.log(y)
}