class Cars
{
    CarDetails(name)
    {
        this.name = name;
    }

    StartEngine()
    {
        console.log('The engine started for : '+this.name)
    }

    StopEngine()  
    
        {
            console.log('The engine stopped for : '+this.name)
        }
    
}


class Toyota extends Cars
{
TopSpeed(speed)
{
    this.speed = speed;
    console.log('Topspeed for ' +this.name +'is' +this.speed)
}


}

ToyotaObject = new Toyota();
ToyotaObject.CarDetails('Mehran')
ToyotaObject.StartEngine();
ToyotaObject.StopEngine();
ToyotaObject.TopSpeed('500cc');