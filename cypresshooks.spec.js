/// <reference types="cypress"/>
describe('implementing cypress hooks',function(){
    beforeEach(function(){
        cy.log('this is login process ')
    })
    before(function(){
        cy.log('this is start  ')
    })
    after(function(){
        cy.log('this is end of automation  ')
    })


    
    it('searching',function(){
        cy.log('implementing searching block successful')
    })
    it('advance searching',function(){
        cy.log('implementing advance searching block successful')
    })
    it('listing',function(){
        cy.log('implementing listing successful')
    })
})