describe('Sample Test Demo 01', () => {
  beforeEach(() => {
   
  })
  
  it('Home Page Test', () => {
    cy.visit('https://base-react-template.vercel.app/')
    cy.contains("Async Submit Validation")
    cy.get('#FirstName').type("bill")
    cy.get('#LastName').type("Last Name")
    cy.get('#Email').type("foo@email.com")
    cy.get('#SubmitButton').click()
    cy.wait(5)
    })

    it('Result', () => { 
      cy.get('#result').contains('delectus')
    })
})