//My main class cars
class cars {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
  //I originally had 2 getDesc one for car and elec.  I decided to research a way to only incorporate 1 getDesc.  This one creates a new var with Template literals.  The variable holds the original constructors but says if the instance is elecCar, to add the additional instructor called range and return it.
  getDesc1(){
    let specs = `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
    if(this instanceof elecCar){
      specs +=` Range:${this.range}`;
    }
    return specs;
}  
}

//My subclass electric cars
class elecCar extends cars {
   constructor(make, model, year, range){
//I added the super method here to call on the parent class.
     super(make,model,year);
       this.range = range;
   }
}

//Creating cars including data in initialized costructors.
const Car1 = new cars('Nissan','Ultima',1997);
console.log(Car1.getDesc1());

const Car2 = new cars('Toyota','Corolla',2010);
console.log(Car2.getDesc1());

const Car3 = new elecCar('Tesla','Model S',2019,'300.mpc');
console.log(Car3.getDesc1());

const Car4 = new elecCar('Tesla','Model Y',2023,'330.mpc');
console.log(Car4.getDesc1());
