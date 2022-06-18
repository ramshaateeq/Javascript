class Animal
{
     constructor(name)
    {
        this.name = name
    }

    eats()
    {
        console.log(this.name+ ' is an animal')
    }
}

let AnimalObject = new Animal()
AnimalObject.name = 'cat'
AnimalObject.eats()

class Dog extends Animal
{
    eats()
    {
        super.eats()
        console.log('This is child class for '+this.name)
    }
}

let DogObject = new Dog
DogObject.name = 'Tommy'
DogObject.eats()
