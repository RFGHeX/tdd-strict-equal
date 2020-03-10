const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').ecpect
const strictEqual = require('../strictEqual')

describe('strictEqual', () => {
    desribe('equalities', () => {
        it('returns true if both paramaters ARE integers', () => {

            //test data
            const numOne = 5
            const strOne = 'five'
            const numTwo = 8
            const strTwo = 'b'

            //call funtion
            const resultOne = strictEqual(numOne, numTwo)
            const resultTwo = strictEqual(numOne, strTwo)
            const resultThree = strictEqual(numOne, numOne)
            const resultFour = strictEqual(strOne, strTwo)

            //assertions
            //should be false, both params are not INT
            expect(resultOne).to.equal(false)
            expect(resultTwo).to.equal(false)
            expect(resultThree).to.equal(true)
            expect(resultFour).to.equal(false)
        })

    })
})