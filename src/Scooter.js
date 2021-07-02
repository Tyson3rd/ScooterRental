class Scooter {
    constructor(id,fullCharge){
        this.id = id
        this.fullCharge = fullCharge;
        this.maxRange = 32;
        this.currentMiles = 0;
    }
    async charge(){
        console.log('Starting Charge');
        await new Promise(resolve => setTimeout(resolve,2000)); //wait 2 seconds
        console.log('Charge complete');
        this.setChargeStatus = true;
    }
    setCurrentMiles(miles){
        if((this.currentMiles + miles) <= this.maxRange){
            this.currentMiles += miles;
        }else{
            this.setCurrentMiles = this.maxRange;
        }
    }
    setChargeStatus(status){
        this.fullCharge = status;
    }
}
module.exports = Scooter;