const ChargeStation = require('../src/ChargeStation');
const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('ChargeStation', () => {
    const scooter = new Scooter(22,true);
    const dallas = new ChargeStation('Dallas');
    const user = new User('Chris', 'Evans','Cap','captain.america@usa.com', new Date(1918,7,4));
    
    
    test('Charge Station Name', () => {
        expect(dallas.location).toBe('Dallas'); 
    });

    test('Scooter added to List', () => {
        dallas.addScooter(scooter);
        expect(dallas.scooterList.length).toBe(1);
        expect(dallas.scooterList[0] instanceof Scooter).toBeTruthy();
    });

    test('Rent Scooter', () => {
        expect(User.isOfAgeToRent(user.birthDate)).toBeGreaterThanOrEqual(18);
        dallas.scooterList[0].setChargedStatus(false); //to test get a charged scooter.
        dallas.addScooter(new Scooter(21,true));
        expect(user.scooter).toBeNull();
        expect(dallas.scooterList.length).toBe(2);
        user.addScooter(dallas.rentScooter());
        expect(user.scooter).not.toBeNull();
        expect(dallas.scooterList.length).toBe(1);
        expect(user.scooter instanceof Scooter).toBeTruthy();
        expect(user.scooter.id).toBe(21);
    });

    test('Return Scooter', () => {
        dallas.returnScooter(user.scooter, user);
        expect(dallas.scooterList.length).toBe(2);
    });
    test("charge", async () => {
        await dallas.scooterList[1].charge(); // we need to wait for the charge!
        //console.log("Test complete");
        expect(dallas.scooterList[1].fullCharge).toBeTruthy();
    });
});