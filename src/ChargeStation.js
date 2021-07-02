class ChargeStation {

    constructor(location, maxScooter){
        this.location = location;
        this.maxScooter = maxScooter;
        this.scooterList = [];
    }

    addScooter(scooter){
        if(this.scooterList.length + 1 <= this.maxScooter){
            this.scooterList.push(scooter);
        }else{
            throw new Error("Scooter Station is full");
        }
    }

    rentScooter(){
        const found = this.scooterList.find(scooter =>{
            return scooter.fullCharge == true;
        });

        const index = this.scooterList.indexOf(found);
        this.scooterList.splice(index, 1);

        return found;
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

        this.chargePayment(user);
    }
}

module.exports = ChargeStation;