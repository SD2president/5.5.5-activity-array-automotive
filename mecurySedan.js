//this includes the vehicle class as a module
const VehicleModule = require(`./vehicle`)

//this shows how to call from this module...

//inherit 
class A28Model extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        super(make,model,year,color,mileage)
        this.maxPassenger =5;
        this.maxOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = "false"   
    }
    loadPassenger(num){
        if(this.passenger = 5){
            console.log("Max capacity!")
        }
        else(this.passenger <= 4){
            console.log( "There's room for: " + ` 5 - ${this.passenger}`)
        }
    }

    checkService(){
        if(this.mileage > 3000){
             return this.scheduleService = "true";
        }
    }
    
    start(){
        if(this.fuel === 0){
            console.log("Engine cant start")
        }
        else(this.fuel <= 10){
            console.log("Engine started")
        }
    }

}

//test
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");


v.start()
v.loadPassenger()
v.stop()
v.checkService()
console.log(v.make)