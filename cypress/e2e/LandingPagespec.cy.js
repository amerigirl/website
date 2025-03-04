describe('template spec', () => {
  it('Visits the site ', () => {
    cy.visit("http://localhost:3000/");
    
    cy.get('[data-testid="welcome"]').should("exist");
  })

 
})