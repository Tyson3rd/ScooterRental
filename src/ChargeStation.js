const Scooter = require('../src/Scooter');
const User = require('../src/User');
class ChargeStation {
    static location = [];

    constructor(locationName, maxScooter){
        this.locationName = locationName;
        this.maxScooter = maxScooter;
        this.scooterList = [];
        this.constructor.location.push(this);
    }

    addScooter(scooter){
        if(this.scooterList.length + 1 <= this.maxScooter){
            this.scooterList.push(scooter);
        }else{
            throw new Error("Scooter Station is full");
        }
    }

    rentScooter(user){
        //if((user.scooter) instanceof Scooter){ throw new RentError('Can only rent one scooter')}
        //if(scooterList.length === 0){ throw new Error("No Scooters at this station")}

        const found = this.scooterList.find(scooter =>{
            return scooter.fullCharge == true;
        });

        const index = this.scooterList.indexOf(found);
        this.scooterList.splice(index, 1);

        return found;
    }
    cantRent(user){
        if(user.scooter != null){
            return false;
        }else{ return true;}
    }

    chargePayment(user){
        //TODO: Charge user.
        console.log(user.getFullName()+" $20 Charged for Scooter rental");
    }
    returnScooter(scooter, user){
        this.scooterList.push(scooter);
        const index = this.scooterList.indexOf(scooter);
        // console.log(index);
        this.scooterList[index].charge()
        user.scooter = null;
        this.chargePayment(user);
    }
}

module.exports = ChargeStation;