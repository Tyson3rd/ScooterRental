const Scooter = require('../src/Scooter');

describe('Scooter', () => {
    const scooter = new Scooter(22,true);

    test("charge", async () => {
        await scooter.charge(); // we need to wait for the charge!
        //console.log("Test complete");
    });

    test('Scooter Has ID', async () => {
        expect(scooter.id).toBe(22);
    });

    test('Add to current miles', () => {
        scooter.setCurrentMiles(5);
        expect(scooter.currentMiles).toEqual(5);
    });
    test('Test change charge status', () => {
        scooter.setChargedStatus(false);
        expect(scooter.fullCharge).toBeFalsy();
    });
});