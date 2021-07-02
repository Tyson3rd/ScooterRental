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





// if(this.scooters.length === 0){ throw new Error('No Scooters for rent')}
// const sct = this.scooters.forEach((scooter, index) => {
//     if(scooter.fullCharge === true){
//         //console.log('Index: '+index);
//         //console.log('Got ID 1: ' +scooter.id);
//         //const sct = scooter
//         //console.log(sc);
//         //sc.fullCharge = false;
//         //console.log('Got ID 2: '+sct.id);
//         //this.scooters.splice(index,1);
//         //sct = scooter;
//         return {scooter:scooter, index: index};
//         //console.log('Got ID 3: '+sct.id);
//         //console.log(sct);
//         //return sct;
//     }else{
//         throw new Error ("No Charged Scooters for rent");
//     }
// });
// this.scooters.splice(sct.index,1);
// sct.scooter.setChargeStatus(false);
// return sct.scooter;