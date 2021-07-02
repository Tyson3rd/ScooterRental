class ChargeStation {

    constructor(location){
        this.location = location;
        this.scooterList = [];
    }

    addScooter(scooter){
        this.scooterList.push(scooter);
    }

    rentScooter(){
        const found = this.scooterList.find(scooter =>{
            return scooter.fullCharge == true;
        });
        //console.log(found.id);
        const index = this.scooterList.indexOf(found);
        this.scooterList.splice(index, 1);
        return found;
        // return found;
    }

    returnScooter(scooter, user){
        this.scooterList.push(scooter);
        const index = this.scooterList.indexOf(scooter);
       // console.log(index);
        this.scooterList[index].charge()

        //TODO: Add payment steps
    }
}

module.exports = ChargeStation;