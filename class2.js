class Cars 

{
        CarDetails(color, brand, cc)
   {
    this.color = color;
    this.brand = brand;
    this.cc = cc;
   }
}
    
    CarsObject = new Cars
    CarsObject.CarDetails('black', 'mercedes', '1000')
    console.log(CarsObject.color)
    
    CarsObject2 = new Cars
    CarsObject2.CarDetails('red', 'suzuki', '800')
    console.log(CarsObject2.brand)