const Bag = require('./Bag')
const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Plane', function () {
    test('has a destination name', function () {
        const plane = new Plane()
        plane.setDestination('London')
        expect(plane.destination).toEqual("London")
    })
    test('boarding check', () => {
        const person = new Passenger("Yuna")
        const handluggage = new Bag(8)
        const hullluggage = new Bag(23)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        expect(person.name).toEqual("Yuna")
        expect(person.bags.length).toEqual(2)
    })

    test ('has right passengers', () => {
        const plane = new Plane("London")
        plane.board("Yuna")
        plane.board("Dave")
        plane.board("Poppy")
        expect(plane.passengers.length).toEqual(3)
    })
})