/// <reference types ="cypress"/>
describe('finding element',function(){
    it('finding element using manual',function(){
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get('table[name=BookTable]').contains('td','Selenium').should('be.visible')

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($element,index,$list)) =>{
          const text=$element.text()
        if(text.include('Amod'))
        {
            cy.get('bookname ko table display garne').eq(index).then(function(bname)
            {
                const bName=bname.text()
                expect(bookName).to.equal('Master in Java')
            })
        }

       } 
    })
})

