const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe('Passenger', function () {
    test('has a name', function () {
        const person = new Passenger("Yuna")
        expect(person.name).toEqual("Yuna")
    })

    test('has bags', () => {
        const person = new Passenger({name: "Dave"})
        const handluggage = new Bag(8)
        const hullluggage = new Bag(25)
        person.addBag(handluggage)
        person.addBag(hullluggage)
        expect(person.bags.length).toBeLessThan(3)
    })

    test('we can read the weight of a bag', () => {
        const poppy = new Passenger({name: 'Poppy'})
        const rucksac = new Bag(6)
        poppy.addBag(rucksac)
        expect(poppy.bags[0].weight).toBeLessThan(16)
    })
})