var assert = require('assert')

const calulator = require('../app/calculator')

describe('Sample Test Cases', function () {
    it('add(5,2) expected result 7 PASS', function (){
        assert.equal(calulator.add(5,2), 7)
    })

    it ('add(5,2) expected result 8 FAIL', function (){
        assert.equal(calulator.add(5,2), 8)
    })

    it ('sub(5,2) expected result 3 PASS', function (){
        assert.equal(calulator.sub(5,2), 3)
    })

    it ('sub(5,2) expected result 5 FAIL', function (){
        assert.equal(calulator.sub(5,2), 5)
    })

    it ('mul(5,2) expected result 10 PASS', function (){
        assert.equal(calulator.mul(5,2), 10)
    })

    it ('mul(5,2) expected result 12 FAIL', function (){
        assert.equal(calulator.mul(5,2), 12)
    })

    it ('div(10,2) expected result 5 PASS', function (){
        assert.equal(calulator.div(10,2), 5)
    })

    it ('div(10,2) expected result 2 FAIL', function (){
        assert.equal(calulator.div(10,2), 2)
    })
})