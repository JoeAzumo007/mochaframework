var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
const{isElementPresent} = require('./validations.js')
log = console.log

describe('Mocha validations',()=>{

    let name = 'Joversky'
    it.skip('Validation with should',()=>{
        name.should.equal('Joversky')
        name.should.have.lengthOf(8n)
        log(isElementPresent())

        isElementPresent().should.be.true
    })

    it('Validate with expect',()=>{
        expect(name).to.equal('Joversky')
        expect(name).to.have.lengthOf(8)
        expect(isElementPresent()).to.true
    })

    it('Validate with assert',()=>{
        assert.equal(name,'Joversky')
        assert.lengthOf(name,8)
        assert.equal(isElementPresent(),true)
    })

    
})