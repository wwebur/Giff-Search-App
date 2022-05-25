/// <reference types="Cypress" />

//Test if there is 20 elements with the argument data-testid="card" in the DOM
describe("List of gif images", () => {
  it("Api returns a list of 20 elements", () => {
    //Visit page
    cy.visit("http://localhost:3000");
    //Check the lenght of the card list
    cy.get('[data-testid="card"]').should("have.length", 20);
  });
});
