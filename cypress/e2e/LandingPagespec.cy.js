describe("template spec", () => {
  beforeEach(() => {
    cy.task("deleteFolder", Cypress.config("downloads"));
  });

  it("Visits the site ", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="welcome"]').should("exist");
    cy.get('[data-testid="resume"]').should("exist").click();
    cy.url().should("include", "Be-AsiaMcKerracherResume.pdf");
    cy.readFile("cypress/downloads/Be-AsiaMcKerracherResume.pdf", "binary", {
      timeout: 15000,
    }).should("exist");
  });
});
