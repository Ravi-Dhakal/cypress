/// <reference types="cypress"/>
/*
describe('test automation', function(){
    it('different check button', function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should ('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should ('be.checked').and('have.value','Movies')
        
        cy.get('#checkbox1').uncheck().should('not.be.checked')

        cy.get(' input[type=checkbox]').check(['Cricket','Hockey'])
    })
    
    it('drop-down buttons',function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#Skills').select('APIs').should('have.value','APIs')

        

    })
    it('languages',function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Catalan').click()
        cy.get('.ui-corner-all').contains('Croatian').click()
        

    })
    it(' select country',function(){
        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('ne')
        cy.get('.select2-search__field').type('{enter}')

    })
     
})  */

describe('another test',function(){
    it('handling alert buttons',function(){
        cy.visit("http://testautomationpractice.blogspot.com/")
       // cy.get("body.variant-wide:nth-child(4) div.content:nth-child(4) div.content-outer div.fauxborder-left.content-fauxborder-left div.content-inner div.main-outer:nth-child(3) div.fauxborder-left.main-fauxborder-left div.region-inner.main-inner div.columns.fauxcolumns div.columns-inner:nth-child(4) div.column-left-outer div.column-left-inner aside:nth-child(1) div.sidebar.section div.widget.HTML:nth-child(2) div.widget-content > button:nth-child(1)").click()
        cy.get('#HTML9 > div.widget-content > button').click()

    })

})