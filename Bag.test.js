const Bag = require('./Bag')

describe ('Bag', () => {
    test('has a weight', () => {
        const bag = new Bag(13)
        expect(bag.weight).toBeLessThan(16)
    })
})