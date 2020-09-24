const Airport = require('./Airport')
const Plane = require('./Plane')

describe('Airport', () => {
    test('airport has a name', () => {
        const LHR = new Airport('LHR')
        expect(LHR.name).toEqual('LHR')
    })

    test('each airport knows about all the others', () => {
        expect(Airport.airports.length).toBe(1)
        const Paris = new Airport('Paris')
        expect(Airport.airports).toBeTruthy()
        expect(Airport.airports.length).toBe(2)
        console.log(Airport.airports)
    })
    test('London to Paris', () => {
        const plane1 = new Plane()
        const [LHR, Paris] = Airport.airports
        LHR.addPlane(plane1)
        expect(plane1.location).toBe('LHR')
        plane1.setDestination('Paris')
        LHR.takeOff(plane1)
        expect(LHR.planes.length).toBe(0)
        expect(Paris.planes.length).toBe(1)

    })
    
})
